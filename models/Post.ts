// models/Post.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  content: string;
  isPinned: boolean; // <--- THÊM DÒNG NÀY
  category: { type: String, default: 'Tin tức chung' },
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    thumbnail: { type: String },
    content: { type: String, required: true },
    isPinned: { type: Boolean, default: false }, // <--- THÊM DÒNG NÀY
  },
  { timestamps: true }
);

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
export default Post;