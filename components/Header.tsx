import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/header.module.scss';
import Navigation from './Navigation';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 3) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <Image src="/images/NewDirectionsLogo.svg" alt="New Directions Logo" width={180} height={50} />
                </Link>
                <Navigation />
            </div>
        </nav>
    );
};

export default Header;
