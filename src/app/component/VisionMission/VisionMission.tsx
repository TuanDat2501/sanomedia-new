"use client";

import React, { useState } from 'react';
import styles from './VisionMission.module.scss';
// Import icons từ thư viện lucide-react (hoặc dùng svg thường)
// Nếu chưa cài: npm install lucide-react
import { Target, Lightbulb, Users, TrendingUp, ShieldCheck, Heart, DollarSign } from 'lucide-react';

type TabType = 'vision-mission' | 'core-values';

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState<TabType>('vision-mission');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* --- HEADER --- */}
        <div className={styles.tabHeader}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'vision-mission' ? styles.active : ''}`}
            onClick={() => setActiveTab('vision-mission')}
          >
            Sứ mệnh & Tầm nhìn
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'core-values' ? styles.active : ''}`}
            onClick={() => setActiveTab('core-values')}
          >
            Giá trị cốt lõi
          </button>
        </div>

        {/* --- CONTENT --- */}
        <div className={styles.tabContent}>
          
          {/* TAB 1: SỨ MỆNH & TẦM NHÌN */}
          {activeTab === 'vision-mission' && (
            <div className={styles.dualGrid}>
              
              {/* CỘT SỨ MỆNH */}
              <div className={`${styles.cardBox} ${styles.mission}`}>
                <h3 className={styles.textRed}>
                  <Target size={32} /> SỨ MỆNH
                </h3>
                <p className={styles.slogan}>
                  "Giáo dục người xem qua Video Content giá trị."
                </p>
                <div>
                  <strong>Sano Media cam kết mang đến:</strong>
                  <ul>
                    <li>Những nội dung giáo dục – giải trí – giá trị, không độc hại.</li>
                    <li>Mô hình kiếm tiền MMO minh bạch, bền vững, giúp nhân sự phát triển.</li>
                    <li>Môi trường để con người có thu nhập tốt, khỏe mạnh và phát triển lành mạnh.</li>
                  </ul>
                </div>
              </div>

              {/* CỘT TẦM NHÌN */}
              <div className={`${styles.cardBox} ${styles.vision}`}>
                <h3 className={styles.textDark}>
                  <TrendingUp size={32} /> TẦM NHÌN
                </h3>
                <p className={styles.slogan}>
                  "Trở thành tập đoàn MMO đa ngành. Hệ sinh thái cùng phát triển - cùng WIN."
                </p>
                <ul>
                  <li>Đổi mới mô hình nội dung và công nghệ.</li>
                  <li>Mở rộng sang nhiều lĩnh vực MMO khác nhau.</li>
                  <li>Trao cơ hội làm chủ và đồng hành cùng những con người có khát vọng vươn lên.</li>
                </ul>
              </div>

            </div>
          )}

          {/* TAB 2: GIÁ TRỊ CỐT LÕI */}
          {activeTab === 'core-values' && (
            <div className={styles.coreValuesWrapper}>
              
              {/* 4 Cards Key Words */}
              <div className={styles.pillarsGrid}>
                <div className={styles.pillarCard}>
                  <span className={styles.icon}>🌱</span>
                  <h4>Phát triển con người</h4>
                </div>
                <div className={styles.pillarCard}>
                  <span className={styles.icon}>💡</span>
                  <h4>Sáng tạo</h4>
                </div>
                <div className={styles.pillarCard}>
                  <span className={styles.icon}>⚖️</span>
                  <h4>Kỷ luật</h4>
                </div>
                <div className={styles.pillarCard}>
                  <span className={styles.icon}>🚀</span>
                  <h4>Nghĩ lớn</h4>
                </div>
              </div>

              {/* Khối triết lý chi tiết */}
              <div className={styles.philosophyBox}>
                <div>
                  <h4>1. Con người là nền tảng cốt lõi tạo nên sự thành công của Sano Media.</h4>
                  <p style={{ marginTop: '10px', color: '#666' }}>Chúng tôi đầu tư vào sự phát triển toàn diện của mỗi cá nhân:</p>
                </div>
                
                {/* 3 ý nhỏ dùng icon check */}
                <ul>
                  <li><DollarSign size={20} /> Năng lực kiếm tiền</li>
                  <li><TrendingUp size={20} /> Tư duy dài hạn</li>
                  <li><Heart size={20} /> Sức khoẻ thể chất & tinh thần</li>
                </ul>

                {/* Câu Quote chốt hạ */}
                <div className={styles.quote}>
                  “Chúng tôi tin rằng: Khi con người mạnh lên, doanh nghiệp tự khắc lớn lên.”
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VisionMission;