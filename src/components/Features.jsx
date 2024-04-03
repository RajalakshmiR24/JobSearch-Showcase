import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
          React Native: A JavaScript framework for building native mobile applications.
          Expo: A framework and platform for universal React applications.
          Rapid API: Utilized the JSearch API for fetching job listings.
          JavaScript/ES6+: Modern JavaScript syntax for efficient and clean code.</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
          <FeatureCard iconUrl={assets.RapidAPI} iconText="Rapid API" />
          <FeatureCard iconUrl={assets.expo02} iconText="Expo" />
        </div>
      </div>
    </div>
  )
}

export default Features