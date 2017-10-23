import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

interface NavProps {}
interface NavState {
    key: number
}

export class NavMenu extends React.Component<NavProps, NavState> {
    public constructor(props: NavProps) {
        super(props);
        this.state = {
            key: 1
        }
    }
    public render() {        
        return (
            <div className='lg-navbar'>
                <nav>
                    <Link className='lg-title' to={ '/' }>LibertyGamers</Link>                                                           
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                    </ul>
                </nav>                
            </div>
        );
    }
}


// activeKey={ this.state.key } onSelect={(currentKey: any) => {
//     this.setState({key: currentKey});
// }}



