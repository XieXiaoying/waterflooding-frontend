import React, {Component}  from 'react';
import messageImg from '../../assets/icon-email.svg';
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import logo from '../../assets/SINOPEC.svg';
import styles from './styles.css';
export default class Header extends Component {
    //<Navbar.Collapse></Navbar.Collapse>
    render() {
        return(
            <Navbar inverse collapseOnSelect className={styles.navbar}>
                <Navbar.Header>
                    <Navbar.Brand className={styles.navbar}>
                        
                        <a href="#brand"><img className = {styles.logo} src = {logo}/>采油二厂智能注水管网系统</a>
                    </Navbar.Brand>
                </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <img src = {messageImg} className="Message"></img>
                        </NavItem>
                    </Nav>
                
            </Navbar>
        );
    }
}