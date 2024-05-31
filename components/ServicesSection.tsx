import styles from "../styles/components/services.module.scss";
import { AiTwotoneHighlight, AiTwotoneMedicineBox, AiTwotoneBank } from 'react-icons/ai';

const ServicesSection = () => {
    return (
        <div className="container">
            <ul className={styles.services}>
                <li style={{ backgroundImage: 'url("/images/services/education01_compressed.jpg")' }}>
                    <div className={styles.overlay}>
                        <AiTwotoneHighlight size={50} />
                        <p>Find Your Perfect Education Role: Access top job listings and career resources tailored for education professionals.</p>
                    </div>
                    <div className={styles["button-container"]}>
                        <a href="/education">Education</a>
                    </div>
                </li>
                <li style={{ backgroundImage: 'url("/images/services/professional01_compressed.jpg")' }}>
                    <div className={styles.overlay}>
                        <AiTwotoneBank size={50} />
                        <p>Find Your Ideal Social Care Role: Browse top job listings and resources tailored for social care professionals.</p>
                    </div>
                    <div className={styles["button-container"]}>
                        <a href="/professional">Professional</a>
                    </div>
                </li>
                <li style={{ backgroundImage: 'url("/images/services/social-care01_compressed.jpg")' }}>
                    <div className={styles.overlay}>
                        <AiTwotoneMedicineBox size={50} />
                        <p>Advance Your Career: Explore top job listings and resources for professionals.</p>
                    </div>
                    <div className={styles["button-container"]}>
                        <a href="/social-care">Social Care</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ServicesSection;
