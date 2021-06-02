import React from 'react'
import './home.css'
import Search from "../components/Search"
import {Link} from "react-router-dom"
import AppIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"

function Home() {
    return (
        <div className="home">
        {/* <h2>Google clone by Peter</h2> */}
            <div className='home_header'>
                <div className="home_headerLeft">
                  <Link to="/about">About</Link>
                  <Link to="/store">Store</Link>
                </div>

                <div className="home_headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppIcon />
                <Avatar />
                </div>
            </div>

            <div className='home_body'>
                <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                 alt="" />
                 <div className="home_inputContainer">
                     <Search />
                 </div>
            <section jscontroller="DiYNK" id="footer__lgbr" role="Scrollbar" tabindex="-1" jsaction="rcuQ6b:npT2md">  <div className="lgcPHd" ></div> <div jsname="fgeUgc" className="footer__language-header"> <span>Google offered in:</span> </div> <div jsname="VhvPic" className="footer__carousel-box" data-ved="2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQjdACegQIAhAb"> <div className="lpFMp Q2sa3c" aria-selected="true" tabindex="0">English</div>   <a className="ONsvmf kXyMy Q2sa3c" href="https://www.google.com/setprefs?hl=ha&amp;sig=0_bDM0LVsjFrjTCBCnug_MNEOaqDQ%3D&amp;prev=https://www.google.com/search?q%3Dtesla%26sxsrf%3DALeKk00P71tdLCQZ7Z4ct6jjirPmFr7grQ:1621887595910%26source%3Dhp%26ei%3DawqsYI-INZCqa_C9uaAN%26oq%3Dtesla%26gs_lcp%3DChFtb2JpbGUtZ3dzLXdpei1ocBADMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnULsqWIs1YM5AaAJwAHgAgAEAiAEAkgEAmAEAoAEBsAEP%26sclient%3Dmobile-gws-wiz-hp%26pccc%3D1&amp;sa=X&amp;ved=2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQjtACegQIAhAc">Hausa</a>    <a className="ONsvmf kXyMy Q2sa3c" href="https://www.google.com/setprefs?hl=ig&amp;sig=0_bDM0LVsjFrjTCBCnug_MNEOaqDQ%3D&amp;prev=https://www.google.com/search?q%3Dtesla%26sxsrf%3DALeKk00P71tdLCQZ7Z4ct6jjirPmFr7grQ:1621887595910%26source%3Dhp%26ei%3DawqsYI-INZCqa_C9uaAN%26oq%3Dtesla%26gs_lcp%3DChFtb2JpbGUtZ3dzLXdpei1ocBADMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnULsqWIs1YM5AaAJwAHgAgAEAiAEAkgEAmAEAoAEBsAEP%26sclient%3Dmobile-gws-wiz-hp%26pccc%3D1&amp;sa=X&amp;ved=2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQjtACegQIAhAd">Igbo</a>    <a className="ONsvmf kXyMy Q2sa3c" href="https://www.google.com/setprefs?hl=yo&amp;sig=0_bDM0LVsjFrjTCBCnug_MNEOaqDQ%3D&amp;prev=https://www.google.com/search?q%3Dtesla%26sxsrf%3DALeKk00P71tdLCQZ7Z4ct6jjirPmFr7grQ:1621887595910%26source%3Dhp%26ei%3DawqsYI-INZCqa_C9uaAN%26oq%3Dtesla%26gs_lcp%3DChFtb2JpbGUtZ3dzLXdpei1ocBADMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnULsqWIs1YM5AaAJwAHgAgAEAiAEAkgEAmAEAoAEBsAEP%26sclient%3Dmobile-gws-wiz-hp%26pccc%3D1&amp;sa=X&amp;ved=2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQjtACegQIAhAe">Èdè Yorùbá</a>    <a className="ONsvmf kXyMy Q2sa3c" href="https://www.google.com/setprefs?hl=pcm&amp;sig=0_bDM0LVsjFrjTCBCnug_MNEOaqDQ%3D&amp;prev=https://www.google.com/search?q%3Dtesla%26sxsrf%3DALeKk00P71tdLCQZ7Z4ct6jjirPmFr7grQ:1621887595910%26source%3Dhp%26ei%3DawqsYI-INZCqa_C9uaAN%26oq%3Dtesla%26gs_lcp%3DChFtb2JpbGUtZ3dzLXdpei1ocBADMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnULsqWIs1YM5AaAJwAHgAgAEAiAEAkgEAmAEAoAEBsAEP%26sclient%3Dmobile-gws-wiz-hp%26pccc%3D1&amp;sa=X&amp;ved=2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQjtACegQIAhAf">Naijíriá Píjin</a>   <div className="Q2sa3c" >  <a href="https://www.google.com/preferences?hl=en-NG&amp;prev=https://www.google.com/search?q%3Dtesla%26sxsrf%3DALeKk00P71tdLCQZ7Z4ct6jjirPmFr7grQ:1621887595910%26source%3Dhp%26ei%3DawqsYI-INZCqa_C9uaAN%26oq%3Dtesla%26gs_lcp%3DChFtb2JpbGUtZ3dzLXdpei1ocBADMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnULsqWIs1YM5AaAJwAHgAgAEAiAEAkgEAmAEAoAEBsAEP%26sclient%3Dmobile-gws-wiz-hp&amp;fg=1&amp;sa=X&amp;ved=2ahUKEwiZydGLluPwAhWNQUEAHfPBDRUQy_ICegQIAhAg#langSec"> <div className="HCqpQd">More</div> </a> </div> </div> </section>
            </div>
        </div>
    )
}

export default Home
