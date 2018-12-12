import React, {Component} from 'react';
import Header from './components/Navbar/';
import Sidebar from './components/Sidebar/';
import Content from './components/Content/';

export default class App extends Component {
    render() {

        return (
            <div>
                <Header />
                <div className="contentBody">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        );
    }
}
