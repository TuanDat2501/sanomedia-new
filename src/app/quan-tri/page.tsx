// app/quan-tri-vien-bi-mat/page.tsx
"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface BlogFormData {
  _id?: string; // Thêm ID để biết đang sửa bài nào
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  isPinned: boolean;
  category: string;
}
const CATEGORIES = ["Hoạt động", "Thành tựu", "Góc nhìn chuyên gia", "Tuyển dụng", "Đào tạo", "Tin tức chung"];
export default function AdminPage() {
  // State form
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    thumbnail: '',
    content: '',
    isPinned: false,
    category: 'Tin tức chung'
  });

  // State danh sách bài viết & loading
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false); // Đang ở chế độ sửa hay thêm mới?

  // Lấy danh sách bài viết khi vào trang
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/blog');
      if (res.data.success) {
        setPosts(res.data.data);
      }
    } catch (error) {
      console.error("Lỗi lấy danh sách:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  // Handle Input Text
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Checkbox
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  // Handle Editor
  const handleContentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  // --- XỬ LÝ SUBMIT (THÊM HOẶC SỬA) ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing) {
        // --- LOGIC SỬA (PUT) ---
        const res = await axios.put('/api/blog', formData);
        if (res.data.success) {
          alert('✅ Cập nhật bài viết thành công!');
          resetForm();
          fetchPosts(); // Load lại danh sách
        }
      } else {
        // --- LOGIC THÊM MỚI (POST) ---
        const res = await axios.post('/api/blog', formData);
        if (res.data.success) {
          alert('✅ Đăng bài thành công!');
          resetForm();
          fetchPosts(); // Load lại danh sách
        }
      }
    } catch (error: any) {
      console.error(error);
      alert('❌ Lỗi: ' + (error.response?.data?.error || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  // --- XỬ LÝ XOÁ ---
  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xoá bài viết này không? Hành động này không thể phục hồi!')) return;

    try {
      await axios.delete(`/api/blog?id=${id}`);
      alert('🗑️ Đã xoá bài viết!');
      fetchPosts(); // Load lại danh sách

      // Nếu đang sửa bài vừa xoá thì reset form
      if (isEditing && formData._id === id) {
        resetForm();
      }
    } catch (error) {
      alert('❌ Lỗi khi xoá bài!');
    }
  };

  // --- XỬ LÝ CHỌN BÀI ĐỂ SỬA ---
  const handleEditClick = (post: any) => {
    setFormData({
      _id: post._id,
      title: post.title,
      description: post.description,
      thumbnail: post.thumbnail || '',
      content: post.content,
      isPinned: post.isPinned || false,
      category: post.category || 'Tin tức chung'
    });
    setIsEditing(true);
    // Cuộn lên đầu trang để sửa
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- RESET FORM ---
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      thumbnail: '',
      content: '',
      isPinned: false,
      category: 'Tin tức chung'
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">

      {/* FORM NHẬP LIỆU */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-12 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {isEditing ? '✏️ Chỉnh sửa bài viết' : '📝 Đăng bài mới'}
          </h1>
          {isEditing && (
            <button onClick={resetForm} className="text-sm text-red-600 hover:underline">
              Hủy bỏ & Tạo mới
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Tiêu đề</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Mô tả ngắn</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Danh mục</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange} // (Vẫn dùng hàm handleChange cũ vì nó xử lý cả select)
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none mb-4"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <label className="block font-medium text-gray-700 mb-1">Link Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none mb-2"
              />
              {formData.thumbnail && (
                <img src={formData.thumbnail} alt="Preview" className="h-12 w-auto object-cover rounded border" />
              )}
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Nội dung bài viết</label>
            <div className="bg-white border border-gray-300 rounded overflow-hidden">
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={modules}
                className="h-64 mb-12"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded border border-gray-100">
            <input
              type="checkbox"
              id="isPinned"
              name="isPinned"
              checked={formData.isPinned}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="isPinned" className="font-medium text-gray-700 cursor-pointer select-none">
              Ghim bài viết này lên đầu
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 text-white px-6 py-3 rounded font-bold transition-colors ${isEditing ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'
                } disabled:bg-gray-400`}
            >
              {loading ? 'Đang xử lý...' : (isEditing ? 'Lưu thay đổi' : 'Đăng bài ngay')}
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 rounded bg-gray-200 text-gray-700 font-bold hover:bg-gray-300"
              >
                Hủy
              </button>
            )}
          </div>
        </form>
      </div>

      {/* DANH SÁCH BÀI VIẾT (TABLE) */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Danh sách bài viết ({posts.length})</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 font-semibold text-gray-600 text-sm">Hình ảnh</th>
                <th className="p-3 font-semibold text-gray-600 text-sm">Tiêu đề</th>
                <th className="p-3 font-semibold text-gray-600 text-sm">Ngày đăng</th>
                <th className="p-3 font-semibold text-gray-600 text-sm text-right">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="border-b hover:bg-gray-50 group">
                  <td className="p-3 w-20">
                    {post.thumbnail ? (
                      <img src={post.thumbnail} className="w-12 h-12 object-cover rounded border" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    )}
                  </td>
                  <td className="p-3">
                    <div className="font-medium text-gray-800 line-clamp-1">{post.title}</div>
                    {post.isPinned && <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold">Ghim</span>}
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleEditClick(post)}
                      className="text-blue-600 hover:underline mr-4 font-medium text-sm"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-500 hover:underline font-medium text-sm"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    Chưa có bài viết nào. Hãy đăng bài đầu tiên!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}