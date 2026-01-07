import React from 'react';

import styles from './page.module.scss';
import { DollarSign, BrainCircuit, HeartPulse } from 'lucide-react';
import PageBanner from '@/app/component/PageBanner/PageBanner';

export default function CoreValuesPage() {
  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Giá Trị Cốt Lõi" 
        subtitle="Nguyên tắc định hình văn hoá và hành động tại Sano Media" 
      />

      {/* --- PHẦN 1: TRIẾT LÝ CON NGƯỜI (NỀN TẢNG) --- */}
      <section className={styles.foundationSection}>
        <div className={styles.container}>
          
          <div className={styles.manifesto}>
            <h2>Triết lý nhân sự</h2>
            <p>
              Con người là tài sản quý giá nhất và là nền tảng cốt lõi tạo nên sự thành công của Sano Media. 
              Chúng tôi không chỉ tuyển dụng nhân sự, chúng tôi đầu tư vào tương lai của họ.
            </p>
            <div className={styles.highlightQuote}>
              “Khi con người mạnh lên, doanh nghiệp tự khắc lớn lên.”
            </div>
          </div>

          <div className={styles.pillars3}>
            {/* Item 1 */}
            <div className={styles.pillarItem}>
              <div className={styles.iconBox}><DollarSign size={32}/></div>
              <h4>Năng lực kiếm tiền</h4>
              <span>Đảm bảo thịnh vượng tài chính</span>
            </div>
            {/* Item 2 */}
            <div className={styles.pillarItem}>
              <div className={styles.iconBox}><BrainCircuit size={32}/></div>
              <h4>Tư duy dài hạn</h4>
              <span>Tầm nhìn xa & Chiến lược bền vững</span>
            </div>
            {/* Item 3 */}
            <div className={styles.pillarItem}>
              <div className={styles.iconBox}><HeartPulse size={32}/></div>
              <h4>Sức khỏe toàn diện</h4>
              <span>Thể chất sung mãn & Tinh thần kỷ luật</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- PHẦN 2: 4 GIÁ TRỊ CỐT LÕI (THE 4 PILLARS) --- */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h3>4 Trụ cột văn hoá</h3>
            <p>Hệ giá trị dẫn đường cho mọi quyết định tại Sano Media</p>
          </div>

          <div className={styles.valuesGrid}>
            
            {/* Value 01 */}
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <div className={styles.valueContent}>
                <h4>Phát triển con người</h4>
                <p>
                  Tập trung vào đào tạo và giáo dục. Chúng tôi tin rằng đầu tư vào tri thức 
                  và kỹ năng của đội ngũ là khoản đầu tư mang lại lợi nhuận cao nhất.
                </p>
              </div>
            </div>

            {/* Value 02 */}
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>02</span>
              <div className={styles.valueContent}>
                <h4>Sáng tạo & Đổi mới</h4>
                <p>
                  Liên tục thách thức những lối mòn cũ. Đổi mới mô hình nội dung, 
                  áp dụng công nghệ mới để tạo ra những sản phẩm đột phá.
                </p>
              </div>
            </div>

            {/* Value 03 */}
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>03</span>
              <div className={styles.valueContent}>
                <h4>Kỷ luật thép</h4>
                <p>
                  Tự do trong khuôn khổ. Sức mạnh của tập thể đến từ sự tuân thủ quy trình 
                  và cam kết hoàn thành mục tiêu đúng hạn với chất lượng cao nhất.
                </p>
              </div>
            </div>

            {/* Value 04 */}
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>04</span>
              <div className={styles.valueContent}>
                <h4>Nghĩ lớn (Think Big)</h4>
                <p>
                  Không giới hạn bản thân trong những mục tiêu nhỏ. Dám mơ những giấc mơ lớn, 
                  đặt mục tiêu thách thức và hành động quyết liệt để hiện thực hóa.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}