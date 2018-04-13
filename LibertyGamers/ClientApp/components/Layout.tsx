import * as React from 'react';
import { Jumbotron } from './Jumbotron';
import { NavMenu } from './NavMenu';
import { WorldClock } from './WorldClock';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="lg-page">            
            <NavMenu />
            <Jumbotron />
            <div className='lg-content'>
                <div className='lg-body'>
                    { this.props.children }
                </div>
                <div className="lg-sidebar">
                    <WorldClock />
                </div>
            </div>            
        </div>;
    }
}
