import * as React from "react";
import  Icon from "react-native-vector-icons/FontAwesome";

const logo: string = require('../images/Logo.png');

export class Jumbotron extends React.Component<{}, {}> {
    public render () {
        return <div className="lg-jumbotron">
            <div className="lg-jumbotron-content">
                <Icon name="rocket" size={30}></Icon>
                <div className="lg-pc-logo">
                    <img src={ logo }  alt=""/>
                </div>
                <div className="lg-jumbotron-bg"></div>
            </div>
        </div>;
    }        
}