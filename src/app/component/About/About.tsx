import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Cột Nội dung */}
        <div className={styles.textCol}>
          <h2>Về Sano Media</h2>
          <p>
            Sano Media là doanh nghiệp sản xuất sáng tạo nội dung YouTube hàng đầu tại Bắc Giang. 
            Với tôn chỉ <strong>"Học tập - Phát triển - Hạnh phúc - Giàu có - Khoẻ mạnh"</strong>, 
            chúng tôi không chỉ xây dựng những kênh nội dung triệu view mà còn kiến tạo một môi trường 
            làm việc nơi mỗi cá nhân được toả sáng.
          </p>
          <p>
            Từ những ngày đầu thành lập, Sano đã xác định sứ mệnh kết nối con người thông qua 
            những thước phim giá trị, mang lại niềm vui và kiến thức cho cộng đồng.
          </p>
        </div>

        {/* Cột Hình ảnh */}
        <div className={styles.imageCol}>
           {/* Lưu ý: Thay src bằng ảnh thật của công ty bạn */}
           <Image 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
             alt="Đội ngũ Sano Media" 
             width={600} 
             height={400}
           />
        </div>
      </div>
    </section>
  );
};

export default About;