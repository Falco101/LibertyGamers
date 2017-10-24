import * as React from 'react';
import { Jumbotron } from './Jumbotron';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="lg-page">            
                <NavMenu />
                <Jumbotron />
                <div className='lg-body'>
                    { this.props.children }
                </div>
                <div className="lg-sidebar"></div>
        </div>;
    }
}
