import * as React from 'react';
import { NavMenu } from './NavMenu';


export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="lg-page">            
                <NavMenu />
                <div className="lg-jumbotron">Hello</div>
                <div className='lg-body'>
                    { this.props.children }
                </div>
        </div>;
    }
}
