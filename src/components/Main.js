import React, {Component} from 'react';
import styles from '../styles/main.module.css';

class Main extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className={styles.main}>
                {this.props.children}
            </div>
        );
    }
}

export default Main;