import * as React from 'react';
import {
    Navbar, 
    Nav,
    NavItem,
    NavItemProps,
    NavDropdown,
    NavDropdownProps,    
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

interface NavProps {}
interface NavState {
    key: number
}

function handleSelected(key: number) {
    
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
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/" className="lg-title">Liberty Gamers</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav activeKey={ this.state.key } onSelect={this.setState}>
                        <NavItem eventKey={1} href={ '/' }>News</NavItem>
                        <NavItem eventKey={2} href={ '/counter' }>Counter</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
        //         <div className='navbar navbar-inverse'>
        //         <div className='navbar-header'>
        //             <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
        //                 <span className='sr-only'>Toggle navigation</span>
        //                 <span className='icon-bar'></span>
        //                 <span className='icon-bar'></span>
        //                 <span className='icon-bar'></span>
        //             </button>
        //             <Link className='navbar-brand' to={ '/' }>LibertyGamers</Link>
        //         </div>
        //         <div className='clearfix'></div>
        //         <div className='navbar-collapse collapse'>
        //             <ul className='nav navbar-nav'>
        //                 <li>
        //                     <NavLink exact to={ '/' } activeClassName='active'>
        //                         <span className='glyphicon glyphicon-home'></span> Home
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={ '/counter' } activeClassName='active'>
        //                         <span className='glyphicon glyphicon-education'></span> Counter
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={ '/fetchdata' } activeClassName='active'>
        //                         <span className='glyphicon glyphicon-th-list'></span> Fetch data
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>;
    }
}
