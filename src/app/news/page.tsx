"use client";

import React, { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import PageBanner from '../component/PageBanner/PageBanner';

// Dữ liệu giả lập
const allNews = [
  {
    id: 1,
    title: "Sano Media đạt cột mốc Nút Vàng Youtube đầu tiên",
    excerpt: "Một hành trình đầy cảm xúc và nỗ lực không ngừng nghỉ của tập thể Sano Media đã được đền đáp bằng sự ghi nhận danh giá từ Youtube.",
    category: "Thành tựu",
    date: "15/02/2024",
    author: "Ban Truyền Thông",
    image: "https://images.unsplash.com/photo-1551817958-c5b51e77f00d?auto=format&fit=crop&q=80", // Ảnh team
    featured: true // Bài này là bài nổi bật
  },
  {
    id: 2,
    title: "Gala Dinner 2023: Bứt phá giới hạn",
    excerpt: "Đêm tiệc tổng kết năm với những màn trình diễn ấn tượng và những phần thưởng xứng đáng cho các cá nhân xuất sắc.",
    category: "Hoạt động",
    date: "20/01/2024",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Xu hướng nội dung Video ngắn năm 2024",
    excerpt: "Phân tích những thay đổi trong thuật toán Youtube Shorts và cách các nhà sáng tạo nội dung cần thích nghi.",
    category: "Góc nhìn chuyên gia",
    date: "10/01/2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Team Building Hạ Long: Kết sức mạnh - Nối thành công",
    excerpt: "Chuyến đi 3 ngày 2 đêm đầy ắp tiếng cười và những hoạt động gắn kết tinh thần đồng đội tại di sản thiên nhiên thế giới.",
    category: "Hoạt động",
    date: "05/12/2023",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Sano Media tuyển dụng nhân sự quý I/2024",
    excerpt: "Mở rộng quy mô sản xuất, Sano Media tìm kiếm những mảnh ghép tài năng cho vị trí Editor và Content Creator.",
    category: "Tuyển dụng",
    date: "01/12/2023",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Đào tạo nội bộ: Tư duy làm chủ trong công việc",
    excerpt: "Buổi workshop chia sẻ về tư duy Ownership giúp mỗi nhân sự chủ động và trách nhiệm hơn với sản phẩm của mình.",
    category: "Đào tạo",
    date: "20/11/2023",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80",
    featured: false
  },
];

const categories = ["Tất cả", "Hoạt động", "Thành tựu", "Góc nhìn chuyên gia", "Tuyển dụng", "Đào tạo"];

export default function NewsPage() {
  const [activeCat, setActiveCat] = useState("Tất cả");

  // Logic lọc bài viết
  const filteredNews = activeCat === "Tất cả" 
    ? allNews 
    : allNews.filter(item => item.category === activeCat);

  // Tách bài Featured và bài thường (Nếu đang xem Tất cả)
  const featuredPost = activeCat === "Tất cả" ? allNews.find(n => n.featured) : filteredNews[0];
  const listPosts = activeCat === "Tất cả" 
    ? filteredNews.filter(n => n.id !== featuredPost?.id) 
    : filteredNews.filter(n => n.id !== featuredPost?.id); // Tránh lặp bài featured

  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Tin Tức & Sự Kiện" 
        subtitle="Cập nhật những chuyển động mới nhất tại Sano Media" 
      />

      {/* --- FILTER SECTION --- */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterList}>
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={activeCat === cat ? styles.active : ''}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        
        {/* --- FEATURED POST (Chỉ hiện nếu có bài) --- */}
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  width={800} height={450}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.badge}>{featuredPost.category}</span>
                <h2 title={featuredPost.title}>{featuredPost.title}</h2>
                <div className={styles.meta}>
                  <span><Calendar size={14}/> {featuredPost.date}</span>
                  {featuredPost.author && <span><User size={14}/> {featuredPost.author}</span>}
                </div>
                <p>{featuredPost.excerpt}</p>
                <Link href={`/news/${featuredPost.id}`} className={styles.readMore}>
                  Đọc tiếp <ArrowRight size={16}/>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* --- LIST POSTS --- */}
        <section className={styles.newsGrid}>
          {listPosts.length > 0 ? listPosts.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.cardImg}>
                <Image 
                  src={item.image} 
                  alt={item.title}
                  width={400} height={250}
                />
                <span className={styles.categoryTag}>{item.category}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.date}>
                  <Clock size={14}/> {item.date}
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt.substring(0, 90)}...</p>
                <Link href={`/news/${item.id}`} className={styles.cardLink}>
                  Xem chi tiết <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          )) : (
            <p style={{gridColumn: '1/-1', textAlign: 'center', color: '#888'}}>
              Chưa có bài viết nào trong danh mục này.
            </p>
          )}
        </section>

        {/* --- PAGINATION (Demo) --- */}
        {listPosts.length > 0 && (
          <div className={styles.pagination}>
            <button className={styles.active}>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
          </div>
        )}

      </div>
    </main>
  );
}