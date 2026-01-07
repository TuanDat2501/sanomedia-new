"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import styles from './page.module.scss';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import PageBanner from '../component/PageBanner/PageBanner';
import { IMAGES } from '../constants/images';
 // Nếu bạn đã tạo file constant

// Định nghĩa kiểu dữ liệu bài viết từ DB
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  createdAt: string;
  isPinned?: boolean;
  slug?: string;
}

const categories = ["Tất cả", "Hoạt động", "Thành tựu", "Góc nhìn chuyên gia", "Tuyển dụng", "Đào tạo"];

export default function NewsPage() {
  const [activeCat, setActiveCat] = useState("Tất cả");
  const [posts, setPosts] = useState<BlogPost[]>([]); // State chứa bài viết thật
  const [loading, setLoading] = useState(true);

  // --- LOGIC MỚI: GỌI API ---
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/blog');
        if (res.data.success) {
          setPosts(res.data.data);
        }
      } catch (error) {
        console.error("Lỗi tải bài viết:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // --- LOGIC LỌC (Giữ nguyên nhưng dùng dữ liệu thật) ---
  const filteredNews = activeCat === "Tất cả" 
    ? posts 
    : posts.filter(item => item.category === activeCat);

  // Tìm bài ghim (isPinned) làm Featured, nếu không có lấy bài mới nhất
  const featuredPost = activeCat === "Tất cả" 
    ? (posts.find(n => n.isPinned) || posts[0]) 
    : filteredNews[0];

  const listPosts = activeCat === "Tất cả" 
    ? filteredNews.filter(n => n._id !== featuredPost?._id) 
    : filteredNews.filter(n => n._id !== featuredPost?._id);

  if (loading) return <div className="text-center py-20">Đang tải tin tức...</div>;

  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Tin Tức & Sự Kiện" 
        subtitle="Cập nhật những chuyển động mới nhất tại Sano Media" 
      />

      {/* FILTER SECTION (Giữ nguyên) */}
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
        
        {/* FEATURED POST */}
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.imageWrapper}>
                {/* Dùng ảnh thumbnail từ DB, nếu lỗi dùng ảnh mặc định */}
                <Image 
                  src={featuredPost.thumbnail || IMAGES.NEWS.THUMB_1} 
                  alt={featuredPost.title}
                  width={800} height={450}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.badge}>{featuredPost.category || 'Tin tức'}</span>
                <h2>{featuredPost.title}</h2>
                <div className={styles.meta}>
                  {/* Format ngày tháng */}
                  <span><Calendar size={14}/> {new Date(featuredPost.createdAt).toLocaleDateString('vi-VN')}</span>
                  <span><User size={14}/> Admin</span>
                </div>
                <p>{featuredPost.description}</p>
                
                {/* Link sang trang chi tiết (dùng ID hoặc Slug) */}
                <Link href={`/news/${featuredPost._id}`} className={styles.readMore}>
                  Đọc tiếp <ArrowRight size={16}/>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* NEWS LIST */}
        <section className={styles.newsGrid}>
          {listPosts.length > 0 ? listPosts.map((item) => (
            <div key={item._id} className={styles.newsCard}>
              <div className={styles.cardImg}>
                <Image 
                  src={item.thumbnail || IMAGES.NEWS.THUMB_2} 
                  alt={item.title}
                  width={400} height={250}
                />
                <span className={styles.categoryTag}>{item.category || 'News'}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.date}>
                  <Clock size={14}/> {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                </div>
                <h3>{item.title}</h3>
                <p className="line-clamp-3">{item.description}</p>
                <Link href={`/news/${item._id}`} className={styles.cardLink}>
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
      </div>
    </main>
  );
}