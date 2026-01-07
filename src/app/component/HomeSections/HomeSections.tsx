import React from 'react';
import Image from 'next/image';
import styles from './HomeSections.module.scss';
import { Youtube, Video, Users, ArrowRight, Award, TrendingUp, DollarSign, Eye } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/images';

const HomeSections = () => {
  return (
    <>
      {/* === PHẦN 1: HỆ SINH THÁI DỊCH VỤ === */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Hệ sinh thái Sano</h2>
            <div className={styles.divider}></div>
            <p>Giải pháp toàn diện cho nhà sáng tạo nội dung và doanh nghiệp</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.icon}><Video /></div>
              <h3>Sản xuất Video</h3>
              <p>Quy trình sản xuất chuyên nghiệp từ ý tưởng, kịch bản, quay dựng đến hậu kỳ VFX.</p>
              <span className={styles.learnMore}>Xem chi tiết <ArrowRight size={16}/></span>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}><Youtube /></div>
              <h3>Quản lý kênh YouTube</h3>
              <p>Tối ưu SEO, phân tích dữ liệu và chiến lược tăng trưởng bền vững cho kênh.</p>
              <span className={styles.learnMore}>Xem chi tiết <ArrowRight size={16}/></span>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}><Users /></div>
              <h3>Sano Academy</h3>
              <p>Đào tạo nhân sự Video Editor, Content Creator thực chiến chất lượng cao.</p>
              <span className={styles.learnMore}>Xem chi tiết <ArrowRight size={16}/></span>
            </div>
          </div>
        </div>
      </section>

      {/* === PHẦN 2: DỰ ÁN TIÊU BIỂU === */}
      <section className={styles.growthSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Hiệu quả thực tế</h2>
            <div className={styles.divider}></div>
            <p>Chúng tôi để những con số và biểu đồ kể câu chuyện thành công</p>
          </div>

          <div className={styles.growthGrid}>
            
            {/* Case 1: Tăng trưởng View */}
            <div className={styles.growthCard}>
              <div className={styles.cardHeader}>
                {/* <span className={styles.tag}>Dự án: Kids Edutainment</span> */}
                <h3>Xây kênh từ con số 0</h3>
              </div>
              <div className={styles.chartImage}>
                {/* Ảnh biểu đồ View tăng vọt */}
                <Image 
                  src={IMAGES.HOME_GROWTH.CHART_VIEW} 
                  alt="Chart View" width={400} height={200} 
                />
                <div className={styles.label}><TrendingUp size={14}/> Verified Data</div>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span>Thời gian</span>
                  <strong>6 Tháng</strong>
                </div>
                <div className={styles.statItem}>
                  <span>Lượt xem</span>
                  <strong>5M+</strong>
                </div>
                <div className={styles.statItem}>
                  <span>Subscriber</span>
                  <strong className={styles.highlight}>100K (Nút Bạc)</strong>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <p>Chiến lược SEO Video kết hợp Shorts Viral giúp kênh đạt Nút Bạc thần tốc với chi phí tối ưu.</p>
              </div>
            </div>

            {/* Case 2: Tăng trưởng Doanh thu */}
            <div className={styles.growthCard}>
              <div className={styles.cardHeader}>
                {/* <span className={styles.tag}>Dự án: Review Tech</span> */}
                <h3>Tối ưu doanh thu (RPM)</h3>
              </div>
              <div className={styles.chartImage}>
                {/* Ảnh biểu đồ Tiền */}
                <Image 
                  src={IMAGES.HOME_GROWTH.CHART_REVENUE} 
                  alt="Chart Revenue" width={400} height={200} 
                />
                <div className={styles.label}><DollarSign size={14}/> Revenue Growth</div>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span>Tăng trưởng</span>
                  <strong className={styles.highlight}>+300%</strong>
                </div>
                <div className={styles.statItem}>
                  <span>RPM TB</span>
                  <strong>$2.5</strong>
                </div>
                <div className={styles.statItem}>
                  <span>Thị trường</span>
                  <strong>Global (US)</strong>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <p>Chuyển đổi tệp khán giả sang thị trường Âu-Mỹ (US/UK) giúp tăng giá trị lượt xem gấp 5 lần.</p>
              </div>
            </div>

            {/* Case 3: Viral Campaign */}
            <div className={styles.growthCard}>
              <div className={styles.cardHeader}>
                {/* <span className={styles.tag}>Dự án: Entertainment</span> */}
                <h3>Chiến dịch Viral Shorts</h3>
              </div>
              <div className={styles.chartImage}>
                {/* Ảnh biểu đồ cột */}
                <Image 
                  src={IMAGES.HOME_GROWTH.CHART_VIRAL} 
                  alt="Chart Viral" width={400} height={200} 
                />
                <div className={styles.label}><Eye size={14}/> Realtime Views</div>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span>Tiếp cận</span>
                  <strong className={styles.highlight}>20 Triệu</strong>
                </div>
                <div className={styles.statItem}>
                  <span>Tương tác</span>
                  <strong>1.2M Like</strong>
                </div>
                <div className={styles.statItem}>
                  <span>Thời gian</span>
                  <strong>30 Ngày</strong>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <p>Sản xuất chuỗi Video ngắn bắt trend, đẩy kênh lọt Top Trending chỉ sau 1 tuần triển khai.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === PHẦN 3: ĐỐI TÁC === */}
      {/* <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnersGrid}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Partner" />
          </div>
        </div>
      </section> */}

      {/* === PHẦN 4: CTA === */}
      {/* <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Sẵn sàng bứt phá cùng Sano Media?</h2>
          <p>Kết nối ngay hôm nay để nhận tư vấn chiến lược nội dung miễn phí.</p>
          <Link href="/contact">
            <button>Liên hệ hợp tác</button>
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default HomeSections;