import React, { Component } from 'react';
import { TitleCard } from '../components/TitleCard';
import { DiscordButton } from '../components/DiscordButton'

export default class TitleContainer extends Component {
    render() {
        return (
            <div id="title">
                <div>
                    <h1>SOLBOUND</h1>
                </div>
                
                <div>
                    <TitleCard />
                </div>
                
                <div>
                    <DiscordButton />
                </div>
            </div>
            
        )
    }
}