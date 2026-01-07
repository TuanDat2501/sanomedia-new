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
            <span style={{fontSize:"3rem"}}>Chào mừng bạn đã đến</span>
            <br />
            <strong>SANO MEDIA</strong>
          </h1>
          <p className={styles.description}>
            Sano Media là doanh nghiệp sản xuất sáng tạo Youtube số 1 tại Bắc Giang. Chúng tôi cung cấp các giải pháp toàn diện về nội dung số, giúp doanh nghiệp phát triển thương hiệu và tăng trưởng kinh doanh thông qua nền tảng Youtube.
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