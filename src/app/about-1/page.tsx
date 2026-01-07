"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.scss';
import { Download } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function AboutPage() {
  return (
    <main className={styles.wrapper}>
      
      {/* 1. HERO BANNER */}
      <section className={styles.heroSection}>
        <div className={styles.bgImage}>
          <Image src={IMAGES.ABOUT.BANNER} alt="Hero" width={1920} height={1080} priority />
        </div>
        <div className={styles.heroContent}>
          <h1>Giới thiệu công ty</h1>
        </div>
      </section>

      {/* 2. STICKY NAV (Cập nhật link neo) */}
      <nav className={styles.stickyNav}>
        <div className={styles.container}>
          <ul>
            {/* Link trỏ đến các ID trong trang này */}
            <li><Link href="#overview" className={styles.active}>Tầm nhìn & Sứ mệnh</Link></li>
            <li><Link href="#values">Giá trị cốt lõi</Link></li>
            <li><Link href="#ceo">Lãnh đạo</Link></li>
            <li><Link href="#facts">Dấu ấn</Link></li>
          </ul>
        </div>
      </nav>

      {/* 3. VISION & MISSION (TỔNG QUAN) */}
      <section id="overview" className={styles.section}>
        <div className={styles.container}>
          
          {/* TẦM NHÌN */}
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Tầm nhìn 2030</span>
            <h2>Kiến tạo hệ sinh thái nội dung số <br/> Vươn tầm Quốc tế.</h2>
            <p>
              Trở thành tập đoàn MMO đa ngành, nơi quy tụ những nhà sáng tạo nội dung hàng đầu, 
              cùng nhau phát triển bền vững dựa trên nền tảng công nghệ và văn hóa chia sẻ.
            </p>
          </div>

          {/* Ảnh minh hoạ Vision */}
          <div style={{ width: '100%', height: '400px', position: 'relative', margin: '40px 0' }}>
             <Image 
                src={IMAGES.ABOUT.VISION} 
                alt="Sano Vision" 
                fill 
                style={{ objectFit: 'cover' }}
             />
          </div>

          {/* SỨ MỆNH (MISSION) - Thêm vào đây */}
          <div className={styles.missionBox}>
            <h3>Sứ mệnh của chúng tôi</h3>
            <p>
              "Giáo dục và nâng cao nhận thức người xem thông qua Video Content giá trị. 
              Chúng tôi cam kết tạo ra môi trường để nhân sự phá bỏ giới hạn thu nhập, 
              phát triển bản thân toàn diện về tư duy - kỹ năng - sức khỏe."
            </p>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES (GIÁ TRỊ CỐT LÕI) - SECTION MỚI */}
      <section id="values" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>DNA của Sano</span>
            <h2>Giá trị cốt lõi</h2>
            <p>Bốn trụ cột định hình văn hóa và hành động của mỗi người Sano.</p>
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1 */}
            <div className={styles.valueItem}>
              <h4>Phát triển con người</h4>
              <p>Đầu tư vào tri thức và kỹ năng của đội ngũ là khoản đầu tư siêu lợi nhuận nhất.</p>
            </div>
            {/* Value 2 */}
            <div className={styles.valueItem}>
              <h4>Sáng tạo đổi mới</h4>
              <p>Liên tục thách thức lối mòn. Đổi mới công nghệ và cách làm để tạo ra sự đột phá.</p>
            </div>
            {/* Value 3 */}
            <div className={styles.valueItem}>
              <h4>Kỷ luật thép</h4>
              <p>Sức mạnh của tập thể đến từ sự tuân thủ quy trình và cam kết mục tiêu đúng hạn.</p>
            </div>
            {/* Value 4 */}
            <div className={styles.valueItem}>
              <h4>Nghĩ lớn (Think Big)</h4>
              <p>Dám mơ những giấc mơ lớn, đặt mục tiêu thách thức và hành động quyết liệt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEO MESSAGE */}
      <section id="ceo" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Ban lãnh đạo</span>
          </div>
          <div className={styles.ceoGrid}>
            <div className={styles.ceoImg}>
               <Image src={IMAGES.LEADERS.CEO} alt="CEO" width={600} height={800} />
            </div>
            <div className={styles.ceoText}>
              <h3>"Con người là gốc rễ của sự thành công."</h3>
              <p>
                Tại Sano Media, chúng tôi không xây dựng công ty, chúng tôi xây dựng con người, 
                và con người sẽ xây dựng công ty lớn mạnh.
              </p>
              <div className={styles.sign}>
                <strong style={{ fontSize: '1.5rem', fontFamily: 'serif' }}>Nguyen Van A</strong>
                <strong>Tổng giám đốc</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FACTS */}
      <section id="facts" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Quy mô & Hiệu quả</span>
            <h2>Những con số biết nói</h2>
          </div>
          <div className={styles.statsGrid}>
             <div className={styles.statItem}>
               <strong>2015</strong><span>Thành lập</span>
             </div>
             <div className={styles.statItem}>
               <strong>50+</strong><span>Nhân sự</span>
             </div>
             <div className={styles.statItem}>
               <strong>05</strong><span>Nút Vàng/Bạc</span>
             </div>
             <div className={styles.statItem}>
               <strong>20M</strong><span>Views/Tháng</span>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DOWNLOAD */}
      <section className={styles.downloadSection}>
        <div className={styles.container}>
          <h3>Tìm hiểu chi tiết về Sano Media</h3>
          <button className={styles.downloadBtn}>
             <Download size={20} /> Tải Hồ sơ năng lực (PDF)
          </button>
        </div>
      </section>

    </main>
  );
}