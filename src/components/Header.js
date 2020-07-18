import React, {Component} from 'react';
import styles from '../styles/head.module.css';

class Header extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className = {styles.head}></div>
        );
    }
}

export default Header;