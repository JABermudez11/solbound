import React from 'react';
// import { SocialFollow } from '../css/SocialFollow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow() {
    return(
        <div className="social-container">
            <h3>Solbound Socials</h3>
            <a href="https://twitter.com/SOLBOUND_NFT" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            
            <a href="https://discord.gg/gCknxmT5ws" className="discord social">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
        </div>
    )
}