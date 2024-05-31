import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/email-template.module.scss';

const EmailTemplate = () => {
  return (
    <>
      <Link className={styles.backLink} href="/">Go back</Link>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image 
            src="/images/NewDirectionsLogo.svg" 
            alt="New website desktop view" 
            width={200} 
            height={100} 
            className={styles.image} 
          />
          <h1>We&apos;re Live!</h1>
        </div>
        <div className={styles.body}>
          <p>Dear John Smith,</p>
          <p>
            We are excited to announce that our new site is live and ready for you to explore! We&apos;ve redesigned our site with a fresh new look and improved navigation to enhance your experience.
          </p>
          <p>
            Check out our new site and let us know what you think.<br />We look forward to your feedback and hope you enjoy the new experience.
          </p>
          <p>
            Best Regards,<br />New Directions Holdings Ltd
          </p>
        </div>
        <div className={styles["button-container"]}>
          <a href="[Website URL]" className={styles.button}>Visit Our New Site</a>
        </div>
        <div className={styles.screenshots}>
          <h2>Take a Sneak Peek</h2>
          <Image 
            src="/images/email-template/screenshot-desktop_compressed.png" 
            alt="New website desktop view" 
            width={600} 
            height={400} 
            className={styles.image} 
          />
          <Image 
            src="/images/email-template/screenshot-mobile_compressed.png" 
            alt="New website mobile view" 
            width={200} 
            height={300} 
            className={styles.image} 
          />
        </div>
        <div className={styles.footer}>
          <p>
            If you have any questions, feel free to <a href="mailto:enquiries@new-directions.co.uk" className={styles.link}>contact us</a>.
          </p>
          <p>&copy; 2024 New Directions Holdings Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
