"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Định nghĩa style nội bộ hoặc dùng module scss
import styles from './detail.module.scss'; // (Bạn tự tạo file scss tương ứng nhé)
import { IMAGES } from '@/app/constants/images';

export default function NewsDetailPage() {
  const { id } = useParams(); // Lấy ID từ URL
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    // Gọi API lấy chi tiết bài viết
    // Lưu ý: Logic API cũ của bạn là GET /api/blog trả về ALL.
    // Bạn nên sửa API để hỗ trợ GET /api/blog?id=... hoặc filter ở đây tạm thời.
    const fetchDetail = async () => {
      try {
        const res = await axios.get('/api/blog');
        if (res.data.success) {
          // Tạm thời filter ở client (Tốt nhất là update API để get 1 bài)
          const found = res.data.data.find((p: any) => p._id === id);
          setPost(found);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div className="text-center py-20">Đang tải...</div>;
  if (!post) return <div className="text-center py-20">Bài viết không tồn tại</div>;

  return (
    <main className="bg-white pb-20">
      {/* Banner nhỏ hoặc không dùng Banner cũng được */}
      <div className="bg-gray-100 py-10">
         <div className="max-w-4xl mx-auto px-5">
             <Link href="/news" className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors mb-5">
                <ArrowLeft size={18}/> Quay lại tin tức
             </Link>
             <span className="text-red-600 font-bold text-sm uppercase tracking-wider">{post.category}</span>
             <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">{post.title}</h1>
             
             <div className="flex gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2"><Calendar size={16}/> {new Date(post.createdAt).toLocaleDateString('vi-VN')}</span>
                <span className="flex items-center gap-2"><User size={16}/> Admin</span>
             </div>
         </div>
      </div>
        {/* Ảnh đại diện */}
        <div className="max-w-4xl mx-auto px-5 mt-10">
        <Image
          src={post.thumbnail || IMAGES.NEWS.THUMB_1} // Dùng ảnh mặc định nếu không có
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="max-w-4xl mx-auto px-5 mt-10">
        {/* Nội dung bài viết (Render HTML từ Quill) */}
        <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </main>
  );
}