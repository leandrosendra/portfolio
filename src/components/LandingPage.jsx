import React from 'react';
import styles from '../stylesheets/LandingPage.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello, I'm <span className={styles.name}>Leandro Sendra</span>.</h1>
            <h2 className={styles.title}>I'm a full-stack web developer.</h2>
            <Link className={styles.link} to='/home'>
            <button className={styles.btn}>View my work <AiOutlineArrowRight/></button>
            </Link>
        </div>
    );
};

export default LandingPage;