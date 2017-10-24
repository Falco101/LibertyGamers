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
                            <i className="mdi mdi-newspaper" aria-hidden="true"></i> News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/events' } activeClassName='active'>
                            <i className="mdi mdi-calendar-clock" aria-hidden="true"></i> Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/games' } activeClassName='active'>
                            <i className="mdi mdi-gamepad-variant" aria-hidden="true"></i> Games
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/about' } activeClassName='active'>
                            <i className="mdi mdi-comment-question-outline" aria-hidden="true"></i> About
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav lg-social-icons">
                        <li>
                           <a href="https://discordapp.com/channels/235915689041330176/235915689041330176">
                                <i className="mdi mdi-discord" aria-hidden="true"></i>
                           </a> 
                        </li>
                        <li>
                           <a href="www.facebook.com">
                                <i className="mdi mdi-facebook-box" aria-hidden="true"></i>
                           </a> 
                        </li>
                        <li>
                           <a href="www.youtube.com">
                                <i className="mdi mdi-youtube-play" aria-hidden="true"></i>
                           </a> 
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



