import React from "react";
import Image3 from "./facebook.png";
import Image4 from "./instagram.png";
import Image5 from "./gmail.png";
import Tooltip from '@mui/material/Tooltip';
import './index.css';
const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <h1 style={{marginBottom:"20px", color:"black"}}> Follow Us On</h1>
                <div className="main-footer" style={{ width: "30%" }}>

                    <Tooltip id="facebook" title="Facebook-Profile : abhinavm347" >
                        <a href="https://www.facebook.com/abhinav.mishra.5074644" target="_blank"><img style={{ background: "white" }} src={Image3} width="60px" height="60px" alt="Hello" />
                        </a>
                    </Tooltip>

                    <Tooltip id="instagram" title="Instagram-Profile : im_ak28">
                        <a href="https://www.instagram.com/im_ak28/" target="_blank"><img style={{ background: "white" }} src={Image4} width="60px" height="60px" alt="Hello" /></a>
                    </Tooltip>

                    <Tooltip id="gmail" title="Gmail-Profile : abhinavm347@gmail.com">
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><img style={{ background: "white" }} src={Image5} width="60px" height="60px" alt="Hello" /></a>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default Footer;