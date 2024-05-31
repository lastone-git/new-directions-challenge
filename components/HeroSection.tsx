import Header from "./Header";
import styles from '../styles/components/hero.module.scss';
import useScreenDimensions from '../hooks/useScreenDimensions';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";

const HeroSection = () => {
    const screenHeight = useScreenDimensions(100).height;

    return (
        <div style={{height: screenHeight}} className={styles.hero}>
            <Header />
            <div className={styles.tagline}>
                <div className={styles.container}>
                    <h1>Unlock Your Future</h1>
                    <span>Discover Your Next Opportunity with Us</span>
                </div>
                <Link className={styles.button + " button"} href="/careers">
                    Visit Careers page
                    <AiOutlineArrowRight size={32} />
                </Link>
            </div>
            <div className={styles["video-container"]}>
                <video autoPlay muted loop className={styles.video}>
                    <source src="/videos/hero-video-compressed.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
