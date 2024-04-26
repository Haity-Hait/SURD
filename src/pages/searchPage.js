import React from 'react';
import './searchPage.css';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import Search from '../components/Search';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="/white surd.png"
                        alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons cors="style" />

                </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults}
                        &nbsp;
                        results ({data?.searchInformation.formattedSearchTime} Seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result" key={item.id}>
                            <a href={item.link}>
                                {
                                    item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchPage_resultImage"
                                            src={
                                                item.pagemap?.cse_image?.length > 0 &&
                                                item.pagemap?.cse_image[0]?.src
                                            }
                                            alt=""
                                        />
                                    )
                                }
                                {item.displayLink}
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
