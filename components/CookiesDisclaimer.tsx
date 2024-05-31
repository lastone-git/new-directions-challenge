import React from 'react';
import styles from '../styles/components/cookies-disclaimer.module.scss'

const CookiesDisclaimer = () => {
    const [state, setState] = React.useState<boolean>(true);

    if (state) {
        return <div className={styles.disclaimer}>
            <p>We use cookies to ensure the best experience possible on our website. These cookies share information about your use of our site with our partners to create a more personalized experience and provide relevant advertising for you, in addition to web analytics for us. By clicking “OK, got it”, you agree to our use of cookies. For more information please see our privacy policy.</p>
            <div className={styles.controls}>
                <button>Manage Preferences</button>
                <button onClick={() => setState(false)}>OK, got it.</button>
            </div>
        </div>
    }
}

export default CookiesDisclaimer;