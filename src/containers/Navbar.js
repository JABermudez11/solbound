import React, { Component } from 'react';
import RoadmapContainer from '../containers/RoadmapContainer';

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <div onClick={() => window.location.replace("/#roadmap")} >
                <span>Roadmap</span>
                </div>
            </div>
        )
    }
}