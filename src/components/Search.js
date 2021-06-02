import React, {useState} from 'react'
import "./search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import {Button} from "@material-ui/core"
import { useHistory } from 'react-router'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'


function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e =>{
        e.preventDefault();
        console.log("wow am clicked by Peter >>>", input );
        if(input !== ""){
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
            history.push('/search');
        }else{
            console.log("empty");
        }
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e=> setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ?(
                <div className="search_buttons">
                <Button type="submit" onClick={search} varient="outlined">Google Search</Button>
                <Button varient="outlined">I'M FEELING LUCKY</Button>
            </div>
            ): (  
                 <div className="search_buttons">
                <Button className="search_buttonsHidden" type="submit" onClick={search} varient="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" varient="outlined">I'M FEELING LUCKY</Button>
            </div>
            )
            
            }
         
        </form>
    )
}

export default Search
