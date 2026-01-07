import React from 'react';
import PageBanner from '../component/PageBanner/PageBanner';
import styles from './page.module.scss';
import Image from 'next/image';
import { IMAGES } from '../constants/images';

// Dữ liệu Timeline
const timelineData = [
  { year: "2015", title: "Thành lập", desc: "Sano Media được thành lập với đội ngũ nòng cốt 5 thành viên, đặt nền móng tại Bắc Giang." },
  { year: "2018", title: "Mở rộng quy mô", desc: "Đạt cột mốc 20 nhân sự. Sở hữu 2 Nút Bạc Youtube đầu tiên." },
  { year: "2020", title: "Bứt phá", desc: "Chuyển văn phòng sang trụ sở mới hiện đại. Đạt Nút Vàng Youtube đầu tiên." },
  { year: "2023", title: "Hệ sinh thái", desc: "Mở rộng sang mảng đào tạo và dịch vụ doanh nghiệp. Nhân sự cán mốc 50+ thành viên." },
  { year: "2024", title: "Vươn ra biển lớn", desc: "Định hướng trở thành tập đoàn MMO đa ngành hàng đầu khu vực." }
];

// Dữ liệu Team (Placeholder - Thay ảnh thật vào đây)
const leaders = [
  { name: "Đào Thanh Tú", role: "Founder & CEO", img: IMAGES.LEADERS.CEO },
  { name: "Nguyễn Đức Tâm", role: "Phó Giám Đốc", img: IMAGES.LEADERS.CEO1 },
  { name: "Nguyễn Thị Hoa", role: "Giám Đốc Tài Chính", img: IMAGES.LEADERS.PROD_HEAD },
  { name: "Nguyễn Thị Liên", role: "HR Manager", img: IMAGES.LEADERS.HR_MGR }
];

export default function AboutPage() {
  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Về Sano Media" 
        subtitle="Hành trình kiến tạo giá trị số từ niềm đam mê" 
      />

      {/* --- 1. GIỚI THIỆU & CEO MESSAGE --- */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          {/* FIX: Sử dụng class introGrid thay vì inline style */}
          <div className={styles.introGrid}>
            
            {/* Cột chữ */}
            <div className={styles.introContent}>
              <h2>Hành trình của chúng tôi</h2>
              <p>
                Sano Media là doanh nghiệp tiên phong trong lĩnh vực sản xuất nội dung sáng tạo trên nền tảng YouTube tại Bắc Giang. 
                Xuất phát điểm từ niềm đam mê với Video và công nghệ số, chúng tôi đã không ngừng nỗ lực để xây dựng một hệ sinh thái 
                MMO (Make Money Online) bền vững.
              </p>
              <p>
                Không chỉ dừng lại ở những con số View hay Subscribe, Sano Media hướng tới việc tạo ra những giá trị thực cho cộng đồng 
                thông qua các nội dung giáo dục, giải trí lành mạnh.
              </p>
            </div>

            {/* Cột CEO Message */}
            <div className={styles.ceoMessage}>
              <blockquote>
                "Chúng tôi tin rằng con người là tài sản lớn nhất. Tại Sano, chúng tôi không xây dựng công ty, 
                chúng tôi xây dựng con người, và con người sẽ xây dựng công ty."
              </blockquote>
              <div className={styles.ceoInfo}>
                <Image 
                  src={IMAGES.LEADERS.CEO}
                  alt="CEO" width={60} height={60} 
                />
                <div>
                  <h4>Mr. Đào Thanh Tú</h4>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. LỊCH SỬ PHÁT TRIỂN (TIMELINE) --- */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Lịch sử phát triển</h2>
            <p>Những cột mốc đáng nhớ trên chặng đường hình thành và phát triển</p>
          </div>

          <div className={styles.timeline}>
            {timelineData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.content}>
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. BAN LÃNH ĐẠO --- */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Đội ngũ lãnh đạo</h2>
            <p>Những người thuyền trưởng chèo lái con tàu Sano Media</p>
          </div>

          <div className={styles.teamGrid}>
            {leaders.map((leader, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.imgWrapper}>
                  <Image 
                    src={leader.img} 
                    alt={leader.name} 
                    width={300} height={400}
                  />
                </div>
                <h3>{leader.name}</h3>
                <span>{leader.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}