import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { Coffee, Zap, Users, Moon ,Plus} from 'lucide-react';
import PageBanner from '../component/PageBanner/PageBanner';


// Dữ liệu mẫu cho thư viện ảnh (Thêm 8-12 ảnh là đẹp)
const libraryPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80", alt: "Team hoạt động ngoài trời" },
  { id: 2, src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80", alt: "Sự kiện công ty" },
  { id: 3, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80", alt: "Họp team sáng tạo" },
  { id: 4, src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80", alt: "Tiệc cuối năm" },
  { id: 5, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80", alt: "Các bạn nữ Sano" },
  { id: 6, src: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80", alt: "Training nội bộ" },
  { id: 7, src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80", alt: "Happy Hour" },
  { id: 8, src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80", alt: "Giao lưu văn nghệ" },
];
export default function SanoLifePage() {
  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Sano Life" 
        subtitle="Làm hết sức - Chơi hết mình - Sống trọn đam mê" 
      />

      {/* --- 1. INTRO --- */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <h2>Work Hard, Play Harder</h2>
          <p>
            Tại Sano Media, văn hóa doanh nghiệp là chất keo gắn kết các thành viên. 
            Chúng tôi tạo ra một môi trường nơi mỗi cá nhân được tự do sáng tạo, 
            được quan tâm về sức khỏe tinh thần và được sống đúng với cá tính của mình.
          </p>
        </div>
      </section>

      {/* --- 2. BENTO GALLERY (HIGHLIGHT) --- */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.bentoGrid}>
            
            {/* Item 1: Large (2x2) - Điểm nhấn chính */}
            <div className={`${styles.galleryItem} ${styles.large}`}>
              <Image 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" 
                alt="Gala Dinner" width={800} height={800} 
              />
              <div className={styles.overlay}>
                <h3>Gala Dinner 2023</h3>
                <span>Sự kiện thường niên lớn nhất năm</span>
              </div>
            </div>

            {/* Item 2: Tall (1x2) */}
            <div className={`${styles.galleryItem} ${styles.tall}`}>
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Teambuilding" width={400} height={800} 
              />
              <div className={styles.overlay}>
                <h3>Teambuilding Hạ Long</h3>
                <span>Kết sức mạnh - Nối thành công</span>
              </div>
            </div>

            {/* Item 3: Normal */}
            <div className={styles.galleryItem}>
              <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" 
                alt="Sinh nhật" width={400} height={400} 
              />
              <div className={styles.overlay}>
                <h3>Sinh nhật thành viên</h3>
                <span>Tổ chức hàng tháng</span>
              </div>
            </div>

            {/* Item 4: Normal */}
            <div className={styles.galleryItem}>
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Đào tạo" width={400} height={400} 
              />
              <div className={styles.overlay}>
                <h3>Friday Talk</h3>
                <span>Chia sẻ kiến thức</span>
              </div>
            </div>

            {/* Item 5: Wide (2x1) */}
            <div className={`${styles.galleryItem} ${styles.wide}`}>
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Văn phòng" width={800} height={400} 
              />
              <div className={styles.overlay}>
                <h3>Không gian sáng tạo</h3>
                <span>Văn phòng hiện đại view toàn thành phố</span>
              </div>
            </div>

             {/* Item 6: Normal */}
             <div className={styles.galleryItem}>
              <Image 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80" 
                alt="Gym & Sport" width={400} height={400} 
              />
              <div className={styles.overlay}>
                <h3>Sano Sport</h3>
                <span>CLB Gym & Chạy bộ</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- 3. SANO ROUTINE (MỘT NGÀY CỦA SANO-ER) --- */}
      <section className={styles.routineSection}>
        <div className={styles.container}>
          <div className={styles.routineHeader}>
            <h2>Một ngày tại Sano</h2>
            <p>Cân bằng giữa công việc hiệu quả và tận hưởng cuộc sống</p>
          </div>

          <div className={styles.routineSteps}>
            <div className={styles.stepItem}>
              <div className={styles.iconCircle}><Coffee /></div>
              <h4>08:00 - Morning Coffee</h4>
              <p>Khởi động ngày mới với cafe và điểm tin sáng cùng đồng đội.</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.iconCircle}><Zap /></div>
              <h4>09:00 - Deep Work</h4>
              <p>Khoảng thời gian tập trung cao độ để bứt phá hiệu suất.</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.iconCircle}><Users /></div>
              <h4>15:30 - Happy Hour</h4>
              <p>Tea-break, ăn nhẹ và giao lưu chém gió nạp năng lượng.</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.iconCircle}><Moon /></div>
              <h4>17:30 - Go Home / Sport</h4>
              <p>Kết thúc công việc, tham gia CLB chạy bộ hoặc về bên gia đình.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CÂU LẠC BỘ (CLUBS) --- */}
      <section className={styles.clubsSection}>
        <div className={styles.container}>
          <div className={styles.routineHeader}>
            <h2>Câu lạc bộ sở thích</h2>
          </div>
          <div className={styles.clubsGrid}>
            <div className={styles.clubCard}>
              <span className={styles.clubIcon}>🏃‍♂️</span>
              <h3>Sano Runners</h3>
              <p>Chinh phục các cung đường marathon và rèn luyện sức bền.</p>
            </div>
            <div className={styles.clubCard}>
              <span className={styles.clubIcon}>📚</span>
              <h3>Book Club</h3>
              <p>Chia sẻ những cuốn sách hay và tư duy phát triển bản thân.</p>
            </div>
            <div className={styles.clubCard}>
              <span className={styles.clubIcon}>🎮</span>
              <h3>Sano E-Sport</h3>
              <p>Giải trí sau giờ làm với các giải đấu PES, AOE nội bộ.</p>
            </div>
          </div>
        </div>
      </section>
         <section className={styles.librarySection}>
        <div className={styles.container}>
          <div className={styles.libraryHeader}>
            <h2>Khoảnh khắc Sano</h2>
            <p>Lưu giữ những kỷ niệm đẹp và nụ cười của các thành viên đại gia đình Sano Media</p>
          </div>

          <div className={styles.libraryGrid}>
            {libraryPhotos.map((photo) => (
              <div key={photo.id} className={styles.photoItem}>
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  width={400} height={400} 
                />
                {/* Lớp phủ khi hover */}
                <div className={styles.photoOverlay}>
                  <div className={styles.overlayIcon}>
                    <Plus size={32} strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút xem thêm (Nếu cần) */}
          <button className={styles.loadMoreBtn}>Xem thêm ảnh</button>
        </div>
      </section>
    </main>
  );
}