"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { IMAGES } from '../../constants/images';
import { BookOpen, Lightbulb, ShieldCheck, Rocket, XCircle, AlertTriangle, Gem, TrendingUp, MessageSquare, Users, Trophy, Target, RefreshCw, Award, Smile, Zap, User } from 'lucide-react';

export default function CoreValuesPage() {
  // Dữ liệu từ hình ảnh bạn cung cấp
  
  const coreValues = [
    {
      id: "01",
      title: "Con người",
      intro: "Con người là nền tảng cốt lõi tạo nên sự thành công của Sano Media. Chúng tôi đầu tư vào sự phát triển toàn diện của mỗi cá nhân:",
      list: [
        "Năng lực kiếm tiền",
        "Tư duy dài hạn",
        "Sức khỏe thể chất và tinh thần"
      ],
      quote: "Khi con người mạnh lên, doanh nghiệp tự khắc lớn lên.",
      icon: <User />,
      img: "https://i.ibb.co/JVdjz1S/585460997-844318591689261-6580625915479593595-n-1.jpg" // Ảnh team learning
    },
    {
      id: "02",
      title: "Chất lượng",
      intro: "Mọi sản phẩm nội dung và hệ thống MMO tại Sano Media đều được xây dựng trên:",
      list: [
        "Tiêu chuẩn rõ ràng",
        "Quy trình kỷ luật",
        "Cam kết không ngừng nâng cao chất lượng"
      ],
      quote: "Chúng tôi không chạy theo số lượng ngắn hạn, mà theo đuổi giá trị lâu dài và uy tín bền vững.",
      icon: <Award />,
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" // Ảnh laptop/work
    },
    {
      id: "03",
      title: "Đổi mới – Thích nghi",
      intro: "Thế giới MMO thay đổi liên tục. Chúng tôi chủ động:",
      list: [
        "Nghiên cứu xu hướng",
        "Ứng dụng công nghệ mới",
        "Liên tục thử nghiệm và cải tiến"
      ],
      quote: "Không đổi mới đồng nghĩa với tụt hậu.",
      icon: <Zap />,
      img: "https://i.ibb.co/5XJC93TF/2b479c56-79af-4ec0-ab48-acead63d3d87.jpg" // Ảnh công nghệ
    },
    {
      id: "04",
      title: "Chính trực",
      intro: "Sự chính trực là nền tảng cho mọi quyết định và hành động. Sano Media cam kết:",
      list: [
        "Minh bạch trong cơ hội và lợi ích",
        "Công bằng trong đánh giá và trao quyền",
        "Tôn trọng lẫn nhau trong hợp tác"
      ],
      quote: "Không đánh đổi đạo đức để lấy tăng trưởng ngắn hạn.",
      icon: <ShieldCheck />,
      img: "https://i.ibb.co/wNjs0M7R/istockphoto-1480535737-612x612.jpg" // Ảnh bắt tay
    },
    {
      id: "05",
      title: "Cùng phát triển – Cùng WIN",
      intro: "Sano Media không chỉ xây dựng một công ty, mà xây dựng một cộng đồng cùng phát triển. Chúng tôi:",
      list: [
        "Chia sẻ cơ hội",
        "Đồng hành lâu dài",
        "Đầu tư cho những người muốn đi xa hơn và giàu hơn"
      ],
      quote: "Công ty phát triển – nhân sự phải phát triển. Không ai bị bỏ lại phía sau.",
      icon: <Users />,
      img: "https://i.ibb.co/39PPG8kS/businesswomen-giving-hi-five-touching-260nw-2201705007.jpg" // Ảnh high-five
    }
  ];
  return (
    <main className={styles.wrapper}>

      {/* 1. HERO BANNER */}
      <section className={styles.heroSection}>
        <div className={styles.bgImage}>
          <Image
            src={IMAGES.ABOUT.BANNER} // Ảnh văn phòng/team
            alt="Core Values Hero"
            fill
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.label}>DNA Của Sano Media</span>
          <h1>Giá trị cốt lõi</h1>
          <p>
            <b>Phát Triển Con Người - Sáng Tạo - Kỷ luật – Nghĩ Lớn</b>
          </p>
        </div>
      </section>

      {/* 2. VALUES LIST */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>

          {/* <div className={styles.introText}>
            <h2>Hệ quy chiếu hành động</h2>
            <p>
              Đây không phải khẩu hiệu. Đây là cách chúng tôi sống, làm việc
              và ra quyết định mỗi ngày.
            </p>
          </div> */}

          <div className={styles.valuesList}>
            {coreValues.map((item) => (
              <div key={item.id} className={styles.valueCard}>

                {/* CỘT CONTENT (70%) */}
                <div className={styles.contentSide}>
                  <div className={styles.headerRow}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <h3>{item.title}</h3>
                  </div>

                  {/* Dẫn nhập */}
                  <p className={styles.introDesc}>{item.intro}</p>

                  {/* List gạch đầu dòng */}
                  {item.list && (
                    <ul>
                      {item.list.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                  )}

                  {/* Quote */}
                  <div className={styles.quoteBox}>
                    <p>{item.quote}</p>
                  </div>
                </div>

                {/* CỘT HÌNH ẢNH (30%) */}
                <div className={styles.imageSide}>
                  <Image src={item.img} alt={item.title} fill />
                  <span className={styles.indexNumber}>{item.id}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 1. HERO BANNER */}
      {/* <section className={styles.heroSection}>
        <div className={styles.bgImage}>
           <Image src={IMAGES.SANO_LIFE.OFFICE} alt="Sano Culture" fill priority />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.label}>Văn hóa doanh nghiệp</span>
          <h1>Giá trị cốt lõi</h1>
          <p>
            Những nguyên tắc vàng định hình tư duy và hành động <br/>
            của người Sano Media để kiến tạo thành công bền vững.
          </p>
        </div>
      </section> */}

      {/* 2. VALUES LIST (8 GIÁ TRỊ TỪ FILE EXCEL) */}
     {/*  <section className={styles.heroSection}>
        <div className={styles.bgImage}>
          <Image
            src={IMAGES.SANO_LIFE.OFFICE}
            alt="Core Values Hero" fill priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Văn hóa cốt lõi</h1>
          <p>8 nguyên tắc vàng và bộ quy tắc ứng xử của người Sano Media</p>
        </div>
      </section> */}

      {/* 2. VALUES LIST (8 GIÁ TRỊ) */}
      {/* <section className={styles.valuesSection_1}>
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
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesHeader}>
            <h2>Các nguyên tắc bất di bất dịch</h2>
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
      </section> */}
    </main>
  );
}