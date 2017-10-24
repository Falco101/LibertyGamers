import * as React from "react";

const logo: string = require('../images/Logo.png');

interface JumbotronState {
    playing: boolean
}

export class Jumbotron extends React.Component<{}, JumbotronState> {
    state = {
        playing: true
    };

    public render () {
        var playstate: string;
        if (this.state.playing) {
            playstate = 'pause';
        }
        else {
            playstate = 'play';
        }
        function StartStop(jumbotron: Jumbotron) {
            const background: Element = document.getElementsByClassName('lg-jumbotron-bg')[0];

            if(jumbotron.state.playing) {                
                background.setAttribute('style', 'animation-play-state: paused;');
                jumbotron.setState({playing: false});
            }
            else {
                background.setAttribute('style', 'animation-play-state: running;');
                jumbotron.setState({playing: true});
            }            
        }

        return <div className="lg-jumbotron">
            <div className="lg-jumbotron-bg"></div>
            <button type="button" className="btn btn-default lg-jumbotron-pause" onClick={ () => {StartStop(this);} } aria-label={ playstate }>
                <i className={ "mdi mdi-" + playstate } aria-hidden="true"></i>
            </button>
            <div className="lg-jumbotron-content">            
                <div className="lg-pc-logo">
                    <img src={ logo }  alt=""/>
                </div>                
            </div>
        </div>;
    }
}