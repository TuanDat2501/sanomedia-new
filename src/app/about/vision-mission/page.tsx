"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { IMAGES } from '../../constants/images';
import { Target, TrendingUp, Heart } from 'lucide-react';

export default function VisionMissionPage() {
  return (
    <main className={styles.wrapper}>

      {/* 1. HERO - CÓ ẢNH NỀN */}
      <section className={styles.heroSection}>
        <div className={styles.bgImage}>
          {/* Dùng ảnh Banner chung hoặc ảnh Team */}
          <Image
            quality={70}
            src={IMAGES.ABOUT.MISSION}
            alt="Hero Background"
            fill
            style={{ objectPosition: 'top center' }}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.label}>Kim chỉ nam hoạt động</span>
          <h1>Sứ mệnh</h1>
          <p>
            "Giáo dục người xem qua Video Content giá trị." <br />
            Đó là lời cam kết xuyên suốt của Sano Media từ những ngày đầu thành lập.
          </p>
        </div>
      </section>

      {/* 2. VISION - GIỮ NGUYÊN */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionBox}>
            <div className={styles.visionText}>
              <h2>
                {/* <span className={styles.year}>2030</span> */}
                Tầm nhìn
              </h2>
              <p>
                Trở thành biểu tượng trong ngành sáng tạo nội dung số.
                Xây dựng một <strong>"Hệ sinh thái cùng phát triển - Cùng WIN"</strong>.
              </p>
              <ul>
                <li><span className={styles.dot}></span> Trở thành tập đoàn MMO đa ngành</li>
                <li><span className={styles.dot}></span> Đổi mới mô hình nội dung và công nghệ sản xuất</li>
                <li><span className={styles.dot}></span> Mở rộng sang nhiều lĩnh vực MMO khác nhau</li>
                <li><span className={styles.dot}></span> Trao cơ hội làm chủ cho nhân sự có khát vọng</li>
              </ul>
            </div>
            <div className={styles.visionImage}>
              <Image
                src={IMAGES.ABOUT.VISION}
                alt="Vision MMO"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION - XẾP HÀNG DỌC (ROWS) */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionHeader}>
            <h2>Sứ mệnh Sano Media</h2>
            <p>3 Trụ cột giá trị mà chúng tôi theo đuổi</p>
          </div>

          <div className={styles.missionGrid}>

            {/* ROW 1: Nội dung */}
            <div className={styles.missionCard}>
              <div className={styles.bgImage}>
                <Image
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
                  alt="Content" fill
                />
              </div>
              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <div className={styles.iconWrapper}><Target /></div>
                <h3>Nội dung Giá trị</h3>
                <p>
                  Mang đến những sản phẩm Giáo dục – Giải trí – Lành mạnh.
                  Nói không với nội dung độc hại (Toxic). Nâng cao nhận thức cộng đồng thông qua từng thước phim.
                </p>
              </div>
            </div>

            {/* ROW 2: Mô hình */}
            <div className={styles.missionCard}>
              <div className={styles.bgImage}>
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                  alt="Business Model" fill
                />
              </div>
              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <div className={styles.iconWrapper}><TrendingUp /></div>
                <h3>Mô hình Bền vững</h3>
                <p>
                  Xây dựng hệ thống MMO minh bạch. Giúp nhân sự phá bỏ giới hạn thu nhập,
                  làm chủ tài chính từ chính đam mê sáng tạo của mình. Chia sẻ cơ hội làm chủ doanh nghiệp.
                </p>
              </div>
            </div>

            {/* ROW 3: Con người */}
            <div className={styles.missionCard}>
              <div className={styles.bgImage}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Environment" fill
                />
              </div>
              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <div className={styles.iconWrapper}><Heart /></div>
                <h3>Môi trường Hạnh phúc</h3>
                <p>
                  Kiến tạo không gian làm việc nơi con người được phát triển toàn diện:
                  Tư duy sắc bén - Kỹ năng vượt trội - Sức khỏe dẻo dai. Văn hóa "Work Hard, Play Harder".
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}