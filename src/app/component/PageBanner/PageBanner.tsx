import React from 'react';
import styles from './PageBanner.module.scss';
import { IMAGES } from '@/app/constants/images';

interface Props {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: Props) => {
  return (
    <section className={styles.banner} style={{ backgroundImage: `url(${IMAGES.ABOUT.BANNER})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;