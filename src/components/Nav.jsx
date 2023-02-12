import React from 'react';
import styles from '../stylesheets/Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
                                  
    return (
        <div className={styles.container}>
            <ul>
                <Link to="/" className={styles.l}><li>Go back</li></Link>

            </ul>
        </div>
    );
};


export default Nav;