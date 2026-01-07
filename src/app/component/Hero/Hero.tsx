import React from 'react';
import styles from './Hero.module.scss';
import { IMAGES } from '@/app/constants/images';

const Hero = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${IMAGES.HERO_BG})` }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Sano Media Việt Nam</span>
          <h1 className={styles.title}>
            Đối tác chiến lược <br />
            <strong>NỘI DUNG SỐ</strong>
          </h1>
          <p className={styles.description}>
            Chúng tôi kiến tạo những giá trị bền vững trên nền tảng YouTube, 
            giúp thương hiệu và nhà sáng tạo nội dung bứt phá giới hạn.
          </p>
          
          <div className={styles.btnGroup}>
            <button className={styles.btnPrimary}>Khám phá ngay</button>
            <button className={styles.btnOutline}>Liên hệ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;