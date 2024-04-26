import React, { useState } from 'react'
import "./search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'


function Search({ hideButtons = false, cors }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        if (input !== "") {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
            history.push('/search');
        } else {
            console.log("empty");
        }
    }
    return (
        <form className="search">
            <div className={`search_input ${cors}`}>
                <input className={`${cors}`} value={input} placeholder='Ask Mr Know All.....' onChange={e => setInput(e.target.value)} />
                <Button type="submit" onClick={search} varient="outlined"><SearchIcon className="search_inputIcon" /></Button>
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search} varient="outlined">Surd Search</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_buttonsHidden" type="submit" onClick={search} varient="outlined">Google Search</Button>
                </div>
            )

            }

        </form>
    )
}

export default Search
