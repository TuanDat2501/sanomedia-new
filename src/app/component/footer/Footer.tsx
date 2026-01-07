import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { Facebook, Youtube, Linkedin, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* CỘT 1 */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/image/logo123.png"
                alt="Sano Media Logo"
                width={200}
                height={50}
              ></Image>
            </Link>
            <p className={styles.description}>
              Doanh nghiệp sản xuất sáng tạo nội dung YouTube hàng đầu.
              Kiến tạo giá trị số bền vững & môi trường làm việc hạnh phúc.
            </p>
            <div className={styles.socials}>
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* CỘT 2 */}
          <div className={styles.col}>
            <h4>Về Sano</h4>
            <ul>
              <li><Link href="/about/vision-mission">Tầm nhìn & Sứ mệnh</Link></li>
              <li><Link href="/about/core-values">Giá trị cốt lõi</Link></li>
              <li><Link href="/careers">Tuyển dụng</Link></li>
              <li><Link href="/sano-life">Văn hóa Sano</Link></li>
            </ul>
          </div>

          {/* CỘT 3 */}
          <div className={styles.col}>
            {/* <h4>Hệ sinh thái</h4>
            <ul>
              <li><Link href="#">Sản xuất Video</Link></li>
              <li><Link href="#">Đào tạo Youtube</Link></li>
              <li><Link href="#">Hợp tác Creator</Link></li>
              <li><Link href="#">Tin tức & Sự kiện</Link></li>
            </ul> */}
          </div>

          {/* CỘT 4 - LIÊN HỆ (Cập nhật Icon Box) */}
          <div className={`${styles.col} ${styles.contactCol}`}>
            <h4>Liên hệ</h4>
            <ul className={styles.contactList}>
              <li>
                <div className={styles.iconBox}><MapPin size={16} /></div>
                <a href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+Sano+Media+Vi%E1%BB%87t+Nam/@21.2827528,106.2091628,17z/data=!3m1!4b1!4m6!3m5!1s0x31356da658a4a00b:0x8f52c7ea845700f1!8m2!3d21.2827528!4d106.2091628!16s%2Fg%2F11rk0bk_dw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">Tầng 9, Tòa nhà Việt Thắng, Hoàng Văn Thụ, Bắc Giang</a>
              </li>
              <li>
                <div className={styles.iconBox}><Phone size={16} /></div>
                <span>0522 214 201</span>
              </li>
              <li>
                <div className={styles.iconBox}><Mail size={16} /></div>
                <span>sanomediavn@gmail.com</span>
              </li>
              <li>
                <div className={styles.iconBox}><Globe size={16} /></div>
                <span>www.sanonetworkvn.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>© 2024 Sano Media Việt Nam. All rights reserved.</p>
          <div className={styles.policyLinks}>
            <Link href="#">Điều khoản</Link>
            <Link href="#">Bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;