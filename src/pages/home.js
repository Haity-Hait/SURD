import React from 'react'
import './home.css'
import Search from "../components/Search"
import { Link } from "react-router-dom"
import AppIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"

function Home() {
    return (
        <div className="home">

            <div className='home_body'>
                <img
                    src="/surd.png"
                    alt="" />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
