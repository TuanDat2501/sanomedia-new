// app/api/blog/route.ts

import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';
import dbConnect from '../../../../lib/mongodb';
import Post from '../../../../models/Post';

// 1. LẤY DANH SÁCH BÀI VIẾT (Cho bảng quản lý admin)
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    // Lấy tất cả bài, sắp xếp mới nhất lên đầu
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 2. TẠO BÀI VIẾT MỚI (POST)
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { title, description, thumbnail, content, slug: customSlug, isPinned, category } = body;

    if (!title || !content || !description) {
        return NextResponse.json({ success: false, error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }
    
    const slug = customSlug || slugify(title, { lower: true, locale: 'vi', trim: true });

    const newPost = await Post.create({
      title,
      slug, // Bạn có thể thêm random string nếu sợ trùng
      description,
      thumbnail,
      content,
      isPinned: isPinned || false,
      category: category || 'Tin tức chung',
    });

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// 3. CẬP NHẬT BÀI VIẾT (PUT)
export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { _id, title, description, thumbnail, content, isPinned, category } = body;

    if (!_id) {
      return NextResponse.json({ success: false, error: 'Thiếu ID bài viết' }, { status: 400 });
    }

    // Cập nhật lại slug nếu tiêu đề thay đổi (hoặc giữ nguyên nếu muốn)
    const slug = slugify(title, { lower: true, locale: 'vi', trim: true });

    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      { title, slug, description, thumbnail, content, isPinned, category },
      { new: true } // Trả về dữ liệu mới sau khi update
    );

    return NextResponse.json({ success: true, data: updatedPost });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// 4. XOÁ BÀI VIẾT (DELETE)
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    
    // Lấy ID từ URL (ví dụ: /api/blog?id=12345)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Thiếu ID bài viết' }, { status: 400 });
    }

    await Post.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Xoá thành công' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}