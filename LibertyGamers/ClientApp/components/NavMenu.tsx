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
                    <Nav activeKey={ this.state.key } onSelect={ (selectedKey: any) => {
                        this.setState({key: selectedKey});
                    } }> 
                        <NavItem eventKey={1} href={ '/' }>News</NavItem>
                        <NavItem eventKey={2} href={ '/counter' }>Counter</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
