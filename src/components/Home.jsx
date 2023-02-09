import React from 'react';
import styles from '../stylesheets/Home.module.css'
import Nav from './Nav';
import dosdagas from '../resources/dosdagas.jpg'
import poke from '../resources/pokemon.png'
import { FaReact, FaFigma, FaCss3, FaGit } from 'react-icons/fa';
import { DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiRedux, SiTailwindcss, SiPostgresql, SiMaterialui, SiGmail } from 'react-icons/si'
import { AiOutlineLinkedin, AiOutlineGithub, AiFillPhone } from 'react-icons/ai'
import { IconContext } from 'react-icons'



const Home = () => {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <h1 className={styles.title}>PROJECTS</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.imC}>
                <div className={styles.imgcontainer}>
                    <a href="https://henry-pf-iota.vercel.app/">
                        <img className={styles.dosdagas} src={dosdagas} alt="" />
                        <h1 className={styles.imgdesc}>E-commerce about grills and products related to Argentine barbecue</h1>
                    </a>
                </div>
                <div className={styles.imgcontainer}>
                    <a href="https://github.com/leandrosendra/PI-POKEMON">
                        <img className={styles.dosdagas} src={poke} alt="" />
                        <h1 className={styles.imgdesc}>Single page application about Pokemon characters</h1>
                    </a>
                </div>
            </div>
            <div className={styles.icons}>
                <IconContext.Provider value={{ size: '45px', color: '#444649' }}>
                    <DiJavascript1 />
                    <FaReact />
                    <SiRedux />
                    <FaCss3 />
                    <SiTailwindcss />
                    <SiMaterialui />
                    <FaFigma />
                    <DiNodejs />
                    <SiPostgresql />
                    <FaGit />
                </IconContext.Provider>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>CONTACT ME</h1>
                <div className={styles.underline}></div>
                <div className={styles.icons2}>
                    <IconContext.Provider value={{ size: '45px', color: '#444649' }}>
                        <a className={styles.a} href="https://www.linkedin.com/in/leandro-sendra-823581145/">
                            <AiOutlineLinkedin />
                        </a>
                        <a className={styles.a} href="mailto:leandrosendra09@gmail.com">
                            <SiGmail />
                        </a>
                        <a className={styles.a} href="https://github.com/leandrosendra">
                        <AiOutlineGithub/>
                        </a>
                        <a className={styles.a} href="tel:+5492613394597">
                        <AiFillPhone/>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Home;