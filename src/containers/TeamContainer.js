import React, { Component } from 'react';
import { TeamCard1 } from '../components/TeamCard1';
import { TeamCard2 } from '../components/TeamCard2';
import { TeamCard3 } from '../components/TeamCard3';

export default class TeamContainer extends Component {
    render() {
        return(
            <div>
                <h1>Team</h1>
                <div className="team-container">
                    <TeamCard1 />
                    <TeamCard2 />
                    <TeamCard3 />
                </div>
            </div>
        )
    }
}