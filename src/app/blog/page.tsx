import BlogList from '@/src/components/blog/BlogList';
import { getAllPosts } from '@/src/utils/blog';
import { FC } from 'react';

const BlogPage: FC = async () => {
  const posts = await getAllPosts();

  return <BlogList posts={posts} />;
};

export default BlogPage;
