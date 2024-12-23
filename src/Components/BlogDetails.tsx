import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/blogApi';
import { BlogPost } from '../types/Post';

interface Props {
  postId: number;
}

const BlogDetails: React.FC<Props> = ({ postId }) => {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await getPostById(postId);
      setPost(data);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetails;
