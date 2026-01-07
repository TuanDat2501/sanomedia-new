import React from 'react';

import styles from './page.module.scss';
import { Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import PageBanner from '@/app/component/PageBanner/PageBanner';

export default function VisionMissionPage() {
  return (
    <main>
      <PageBanner 
        title="Tầm nhìn & Sứ mệnh" 
        subtitle="Kim chỉ nam cho mọi hoạt động tại Sano Media" 
      />

      <div className={styles.container}>
        
        {/* --- KHỐI SỨ MỆNH --- */}
        <section className={styles.section}>
          <div className={styles.imageCol}>
             {/* Thay ảnh thật của công ty vào đây */}
             <div className={styles.imgWrapper}>
               <Image 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                 alt="Sứ mệnh Sano" 
                 width={600} height={400} 
               />
             </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.headingRed}>
              <Target className={styles.icon} /> Sứ mệnh
            </h2>
            <p className={styles.slogan}>
              "Giáo dục người xem qua Video Content giá trị."
            </p>
            <div className={styles.content}>
              <strong>Sano Media cam kết mang đến:</strong>
              <ul>
                <li>Những nội dung giáo dục – giải trí – giá trị, không độc hại.</li>
                <li>Mô hình kiếm tiền MMO minh bạch, bền vững, giúp nhân sự phá bỏ giới hạn thu nhập.</li>
                <li>Một môi trường để con người có thu nhập tốt, khỏe mạnh và phát triển lành mạnh.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- KHỐI TẦM NHÌN (Đảo chiều) --- */}
        <section className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.imageCol}>
             <div className={styles.imgWrapper}>
               <Image 
                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                 alt="Tầm nhìn Sano" 
                 width={600} height={400} 
               />
             </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.headingDark}>
              <TrendingUp className={styles.icon} /> Tầm nhìn
            </h2>
            <p className={styles.slogan}>
              "Trở thành tập đoàn MMO đa ngành.<br/>Hệ sinh thái cùng phát triển - cùng WIN."
            </p>
            <div className={styles.content}>
              <ul>
                <li>Đổi mới mô hình nội dung và công nghệ sản xuất.</li>
                <li>Mở rộng sang nhiều lĩnh vực MMO khác nhau, đa dạng nguồn thu.</li>
                <li>Trao cơ hội làm chủ và đồng hành cùng những con người có khát vọng vươn lên.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}