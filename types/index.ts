export interface User {
  id: string;
  email: string;
  emailVerified: Date | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: string;
  userId: string;
  name: string;
  avatar: string | null;
  bio: string | null;
  country: string | null;
  city: string | null;
  profession: string | null;
  interests: string[];
  verificationStatus: "UNVERIFIED" | "PENDING" | "VERIFIED";
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  images: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  link: string | null;
  read: boolean;
  createdAt: Date;
}
