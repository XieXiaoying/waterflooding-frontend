import Pipes from './../Pipes';
import React, {Component} from 'react';
import styles from './styles.css';
export default class Content extends Component {
    render() {
        return (
            <div className={styles.content}>
                <Pipes />
            </div>
        );
    }
}