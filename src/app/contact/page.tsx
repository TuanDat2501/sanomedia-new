"use client";

import React from 'react';

import styles from './page.module.scss';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageBanner from '../component/PageBanner/PageBanner';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  };

  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Liên Hệ" 
        subtitle="Kết nối với Sano Media để cùng kiến tạo giá trị" 
      />

      <section className={styles.contactSection}>
        <div className={styles.container}>
          
          {/* SỬ DỤNG CLASS WRAPPER GRID MỚI */}
          <div className={styles.contentWrapper}>
            
            {/* --- CỘT TRÁI: THÔNG TIN --- */}
            <div className={styles.infoCol}>
              <h2>Kết nối với chúng tôi</h2>
              <p>
                Bạn có câu hỏi về dịch vụ, tuyển dụng hay muốn hợp tác? 
                Đừng ngần ngại liên hệ với đội ngũ Sano Media.
              </p>

              <div className={styles.infoList}>
                {/* Địa chỉ */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin /></div>
                  <div className={styles.details}>
                    <h4>Trụ sở chính</h4>
                    <span>Tầng 9, Tòa nhà Việt Thắng, Đường Hoàng Văn Thụ, TP. Bắc Giang.</span>
                  </div>
                </div>

                {/* Hotline */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone /></div>
                  <div className={styles.details}>
                    <h4>Hotline hỗ trợ</h4>
                    <a href="tel:0522214201">0522 214 201</a>
                    <span>(Hỗ trợ 24/7)</span>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail /></div>
                  <div className={styles.details}>
                    <h4>Email</h4>
                    <a href="mailto:sanomediavn@gmail.com">sanomediavn@gmail.com</a>
                  </div>
                </div>

                {/* Giờ làm việc */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Clock /></div>
                  <div className={styles.details}>
                    <h4>Giờ làm việc</h4>
                    <span>Thứ 2 - Thứ 7: 8:00 - 17:30</span>
                    <span>Chủ Nhật: Nghỉ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CỘT PHẢI: FORM --- */}
            <div className={styles.formCol}>
              <h3>Gửi tin nhắn cho Sano</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Họ và tên <span>*</span></label>
                  <input type="text" placeholder="Nhập họ tên của bạn" required />
                </div>

                {/* Group 2 ô trên 1 hàng */}
                <div className={styles.rowGroup}>
                  <div className={styles.formGroup}>
                    <label>Email <span>*</span></label>
                    <input type="email" placeholder="Nhập email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Số điện thoại <span>*</span></label>
                    <input type="tel" placeholder="Nhập SĐT" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Vấn đề cần hỗ trợ</label>
                  <select>
                    <option>Hợp tác kinh doanh</option>
                    <option>Tuyển dụng</option>
                    <option>Dịch vụ Media</option>
                    <option>Khác</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Nội dung tin nhắn <span>*</span></label>
                  <textarea placeholder="Bạn cần chúng tôi hỗ trợ gì?" required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Gửi tin nhắn
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- BẢN ĐỒ --- */}
      <section className={styles.mapSection}>
        {/* Link iframe Google Maps thực tế trỏ về TP Bắc Giang */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8931587640366!2d106.1947223!3d21.2750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31357917f2238497%3A0x53d53b2164478229!2zVHLhu6Ugc2Dhu58gU2FubyBNZWRpYSBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
          width="100%" 
          height="450" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ Sano Media"
        ></iframe>
      </section>

    </main>
  );
}