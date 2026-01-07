import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { Coffee, Zap, Users, Moon, Plus, BicepsFlexed, BookOpen, Gift, MessageCircle, AlertTriangle, Target, RefreshCw, MessageSquare, ShieldCheck, Award, Smile } from 'lucide-react';
import PageBanner from '../component/PageBanner/PageBanner';
import { IMAGES } from '../constants/images';


// Dữ liệu mẫu cho thư viện ảnh (Thêm 8-12 ảnh là đẹp)
const libraryPhotos = IMAGES.LIBRARY;
export default function SanoLifePage() {
  const values = [
    {
      id: "01",
      title: "Học tập suốt đời",
      desc: "MMO thay đổi liên tục. Không học = Tự loại mình.",
      action: "Mỗi ngày học thêm 1 kỹ năng mới, tư duy mới, cách làm mới.",
      icon: <BookOpen />,
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80" // Ảnh sách vở
    },
    {
      id: "02",
      title: "Thái độ tích cực",
      desc: "Có vấn đề → Đưa giải pháp. Không than vãn, không đổ lỗi.",
      action: "Tư duy luôn hướng về việc đề xuất giải pháp để giải quyết vấn đề.",
      icon: <Smile />,
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" // Ảnh nhóm vui vẻ
    },
    {
      id: "03",
      title: "Sự công nhận",
      desc: "Làm tốt phải được ghi nhận công bằng và minh bạch.",
      action: "Ghi nhận cá nhân và team có kết quả tốt, có ý tưởng sáng tạo.",
      icon: <Award />,
      img: "https://i.ibb.co/cXC8KgT3/MBO-85-300x204.webp" // Ảnh cúp vàng
    },
    {
      id: "04",
      title: "Đoàn kết",
      desc: "Hướng về mục tiêu chung để cùng WIN.",
      action: "Luôn giữ tinh thần giúp đỡ tất cả mọi người trong đội ngũ.",
      icon: <Users />,
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" // Ảnh nắm tay/Team
    },
    {
      id: "05",
      title: "Kỷ luật",
      desc: "Kỷ luật là thước đo giá trị của một người.",
      action: "Tuân thủ tuyệt đối quy trình và quy định của tổ chức.",
      icon: <ShieldCheck />,
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80" // Ảnh thể thao/chạy bộ
    },
    {
      id: "06",
      title: "Phản hồi - Phản biện",
      desc: "Không im lặng - Không né tránh trách nhiệm.",
      action: "Có việc → Phản hồi ngay. Chưa xong → Báo tiến độ. Có vấn đề → Báo sớm.",
      icon: <MessageSquare />,
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" // Ảnh họp hành
    },
    {
      id: "07",
      title: "Kaizen - Cải tiến",
      desc: "Cải tiến liên tục để nâng cao chất lượng.",
      action: "Kaizen hàng ngày, hàng tuần. Ngày hôm nay phải tốt hơn hôm qua.",
      icon: <RefreshCw />,
      img: "https://i.ibb.co/5WFJ5Js6/646bc26a809a7e252cb85d96be615b22.jpg" // Ảnh mũi tên lên/Growth
    },
    {
      id: "08",
      title: "Kết quả = Giá trị",
      desc: "Kết quả lớn = Giá trị càng lớn = Phát triển càng cao.",
      action: "Tập trung liên tục tạo ra những kết quả mới.",
      icon: <Target />,
      img: "https://images.unsplash.com/photo-1533422902779-aff35862e462?auto=format&fit=crop&q=80" // Ảnh đích đến
    },
  ];

  // Dữ liệu Nguyên tắc (Từ phần dưới ảnh)
  const principles = [
    "Không phản hồi, phản biện → Trừ điểm.",
    "Than phiền mà không tập trung giải pháp → Nhắc 1 lần, tái phạm 3 lần loại.",
    "Không đạt mục tiêu liên tiếp → Xem lại vai trò.",
    "Không học – Không tiến bộ → Không tăng thu nhập.",
    "Phá đoàn kết → Loại khỏi hệ thống.",
    "Không phù hợp văn hóa → Không giữ, dù giỏi đến đâu."
  ];
  return (
    <main className={styles.wrapper}>
      <PageBanner
        title="Văn hóa Sano"
        subtitle="Làm hết sức - Chơi hết mình - Sống trọn đam mê"
      />
      <section className={styles.valuesSection_1}>
        <div className={styles.container}>
          <div className={styles.valuesList}>
            {values.map((item) => (
              <div key={item.id} className={styles.valueCard}>
                <div className={styles.bgImage}>
                  <Image src={item.img} alt={item.title} fill />
                </div>
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                  <span className={styles.indexNumber}>{item.id}</span>
                  <div className={styles.iconWrapper}>{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p className={styles.mainDesc}>{item.desc}</p>
                  <p className={styles.subDesc}>
                    <strong style={{ color: '#fff' }}>Hành động:</strong> {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CÁC NGUYÊN TẮC (PRINCIPLES) */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesHeader}>
            <h2>Các Quy Tắc Hoạt Động</h2>
            <p>Kỷ luật là sức mạnh - Văn hóa là sự sống còn</p>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((text, index) => (
              <div key={index} className={styles.principleItem}>
                <AlertTriangle size={24} color='red'/>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                quality={70}
                src={IMAGES.SANO_LIFE.GALA}
                alt="Gala Dinner" width={800} height={800}
              />
              <div className={styles.overlay}>
                <h3>Year End Party 2024</h3>
                <span>Sự kiện thường niên lớn nhất năm</span>
              </div>
            </div>

            {/* Item 2: Tall (1x2) */}
            <div className={`${styles.galleryItem} ${styles.tall}`}>
              <Image
                quality={70}
                src={IMAGES.SANO_LIFE.TEAMBUILDING}
                alt="Teambuilding" width={400} height={800}
              />
              <div className={styles.overlay}>
                <h3>Teambuilding Hòn Sơn - Kiên Giang</h3>
                <span>Kết sức mạnh - Nối thành công</span>
              </div>
            </div>

            {/* Item 3: Normal */}
            <div className={styles.galleryItem}>
              <Image
                quality={70}
                src={IMAGES.SANO_LIFE.BIRTHDAY}
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
                quality={70}
                src={IMAGES.SANO_LIFE.OFFICE}
                alt="Đào tạo" width={400} height={400}
              />
              <div className={styles.overlay}>

                <h3>Không gian sáng tạo</h3>
                <span>Văn phòng hiện đại trẻ trung</span>
              </div>
            </div>

            {/* Item 5: Wide (2x1) */}
            <div className={`${styles.galleryItem} ${styles.wide}`}>
              <Image
                quality={70}
                src={IMAGES.SANO_LIFE.TRAINING}
                alt="Văn phòng" width={800} height={400}
              />
              <div className={styles.overlay}>
                <h3>Friday Talk</h3>
                <span>Chia sẻ kiến thức</span>
              </div>
            </div>

            {/* Item 6: Normal */}
            <div className={styles.galleryItem}>
              <Image
                quality={70}
                src={IMAGES.SANO_LIFE.SPORT}
                alt="Gym & Sport" width={400} height={400}
              />
              <div className={styles.overlay}>
                <h3>Sano Sport</h3>
                <span>CLB Chạy bộ & Bóng đá</span>
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
              <div className={styles.iconCircle}><BicepsFlexed /></div>
              <h4>08:00 - Thể dục sáng</h4>
              <p>Khởi động ngày mới bài thể dục năng lượng cùng đồng đội.</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.iconCircle}><Zap /></div>
              <h4>08:30 - Deep Work</h4>
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
                  quality={70}
                  src={photo.src}
                  alt={photo.alt}
                  width={400} height={400}
                />
                {/* Lớp phủ khi hover */}
                {/* <div className={styles.photoOverlay}>
                  <div className={styles.overlayIcon}>
                    <Plus size={32} strokeWidth={3} />
                  </div>
                </div> */}
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