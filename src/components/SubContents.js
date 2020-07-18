import React, {Component} from 'react';
import styles from '../styles/subcont.module.css';

class SubContent extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className = {styles.subcont}></div>
        );
    }
}

export default SubContent;