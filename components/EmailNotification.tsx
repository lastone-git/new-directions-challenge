import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../styles/components/email-notification.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EmailNotification = () => {
    const [showNotification, setShowNotification] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        if (router.pathname === '/email-template') {
            setShowNotification(false);
        } else {
            const timer = setTimeout(() => {
                if (router.pathname !== '/email-template') {
                    setShowNotification(true);
                }
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [router.pathname]);

    if (showNotification) {
        return (
            <div className={`${styles.notification} ${showNotification ? styles.show : ''}`}>
                <Link href="/email-template">
                    <div className={styles.icon}>
                        <AiOutlineMail className={styles.inner} size={25} />
                    </div>
                    See Email Template
                </Link>
            </div>
        );
    }

    return null;
}

export default EmailNotification;
