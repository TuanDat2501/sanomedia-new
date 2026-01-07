"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
// Thêm ChevronDown cho mũi tên
import { Mail, Phone, Menu, X, Facebook, Youtube, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Xử lý scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- CẤU TRÚC MENU MỚI (Có children) ---
  const navItems = [
    { 
      label: 'Về chúng tôi', 
      href: '/about',
      // Thêm menu con
      children: [
        { label: 'Tầm nhìn & Sứ mệnh', href: '/about/vision-mission' },
        { label: 'Giá trị cốt lõi', href: '/about/core-values' }
      ]
    },
    { label: 'Văn hoá Sano', href: '/life' },
    { label: 'Tuyển dụng', href: '/careers' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Liên hệ', href: '/contact' },
  ];

  return (
    <>
      <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
        
        {/* TOP BAR (Giữ nguyên) */}
        <div className={styles.topBar}>
          <div className={styles.container}>
            <div className={styles.contactInfo}>
              <a href="mailto:sanomediavn@gmail.com"><Mail size={14}/> sanomediavn@gmail.com</a>
              <a href="tel:0522214201"><Phone size={14}/> 0522 214 201</a>
            </div>
            <div className={styles.socials}>
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Youtube size={16} /></a>
              <a href="#"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        {/* MAIN BAR */}
        <div className={styles.mainBar}>
          <div className={styles.container}>
            
            <Link href="/" className={styles.logo}>SANO MEDIA</Link>

            {/* --- DESKTOP MENU --- */}
            <nav className={styles.navDesktop}>
              {navItems.map((item, index) => (
                <div key={index} className={styles.navItem}>
                  {/* Nếu có children thì hiển thị text + mũi tên, không thì hiển thị Link thường */}
                  {item.children ? (
                    <>
                      <Link href={item.href}>
                        {item.label} <ChevronDown size={14} />
                      </Link>
                      
                      {/* DROPDOWN MENU */}
                      <div className={styles.dropdownMenu}>
                        {item.children.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href}>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>

            <button className={styles.ctaBtn}>Nhận tư vấn</button>

            <button className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>

          </div>
        </div>
      </header>

      {/* --- MOBILE MENU DRAWER --- */}
      <div 
        className={`${styles.backdrop} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>
          <X size={32} />
        </button>

        {/* Render Mobile Menu items */}
        {navItems.map((item, index) => (
          <div key={index} className={styles.mobileNavItem}>
            {/* Link cha */}
            <Link 
              href={item.href} 
              className={styles.mobileLink}
              onClick={() => !item.children && setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>

            {/* Nếu có children, render luôn bên dưới (dạng expanded sẵn hoặc làm accordion) */}
            {item.children && (
              <div className={styles.mobileSubMenu}>
                {item.children.map((subItem, subIndex) => (
                  <Link 
                    key={subIndex} 
                    href={subItem.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <button style={{ /* Style giữ nguyên */ 
            marginTop: '20px', padding: '15px', background: '#D30000', color: 'white', border: 'none', fontWeight: 'bold', textTransform: 'uppercase'
        }}>
          Nhận tư vấn ngay
        </button>
      </div>
    </>
  );
};

export default Header;