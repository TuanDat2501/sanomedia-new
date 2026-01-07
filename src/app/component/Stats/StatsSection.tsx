import React from 'react';
import styles from './StatsSection.module.scss';

// Định nghĩa kiểu dữ liệu cho props (nếu cần tái sử dụng)
interface StatItem {
  number: string;
  label: string;
  desc: string;
}

const statsData: StatItem[] = [
  { 
    number: "09", 
    label: "Năm kinh nghiệm", 
    desc: "Phát triển bền vững" 
  },
  { 
    number: "02", 
    label: "Nút vàng", 
    desc: "Chứng nhận YouTube" 
  },
  { 
    number: "30", 
    label: "Nút bạc", 
    desc: "Kênh đạt 100k sub" 
  },
  { 
    number: "50+", 
    label: "Nhân sự", 
    desc: "Đội ngũ chuyên nghiệp" 
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {statsData.map((item, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;