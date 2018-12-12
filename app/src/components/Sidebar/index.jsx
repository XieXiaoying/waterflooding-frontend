import React, {Component} from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import styles from './styles.css';
import classNames from 'classnames';
// import cx from 'classnames';
import CSSModules from 'react-css-modules';
export default class Sidebar extends Component {
    render() {
        // const cx = classNames({
        //     [styles.item]: this.state.active,
        //     [styles.custom]: !this.state.active
        // });
        console.log(this.state);
        return(
            <ListGroup className={styles.sidebar}>
                <ListGroupItem href="#" className={'${styles.listItem}${styles.active}'} active>注水官网图</ListGroupItem>
                <ListGroupItem href="#" className="listItem" >运行管理</ListGroupItem>
                <ListGroupItem href="#" className="listItem" >注水效果</ListGroupItem>
                <ListGroupItem href="#" className="listItem" >某某站详情</ListGroupItem>
                <ListGroupItem href="#" className="listItem" >某某井详情</ListGroupItem>
            </ListGroup>
        
        );
    }
}
//CSSModules(Sidebar, styles)