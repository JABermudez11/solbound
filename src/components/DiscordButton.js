import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const DiscordButton = () => {
    return(
        <div>
            <h2>Join the Adventure!</h2>
            <a href="https://discord.gg/gCknxmT5ws" className="discord social">
                    <FontAwesomeIcon icon={faDiscord} size="8x" />
            </a>
            <div>                
            </div>
        </div>
    )
}