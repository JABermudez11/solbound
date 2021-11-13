import React, { Component } from 'react';
import {RoadmapCard1} from '../components/RoadmapCard1';
import {RoadmapCard2} from '../components/RoadmapCard2';
import {RoadmapCard3} from '../components/RoadmapCard3';
import {RoadmapCard4} from '../components/RoadmapCard4';
import {RoadmapCard5} from '../components/RoadmapCard5';

export default class RoadmapContainer extends Component {
    render() {
        return(
            <div id="roadmap">
                <h1>Roadmap</h1>
                <p>
                    For more details, check out our discord.
                </p>
                
                <div>
                    <RoadmapCard1 />
                    <RoadmapCard2 />
                    <RoadmapCard3 />
                    <RoadmapCard4 />
                    <RoadmapCard5 />
                </div>
                               
                
            </div>
        )
    }
}