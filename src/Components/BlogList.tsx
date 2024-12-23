import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api/blogApi';
import { BlogPost } from '../types/Post';

interface Props {
  onViewDetails: (id: number) => void;
  onEditPost: (post: BlogPost) => void;
}

const BlogList: React.FC<Props> = ({ onViewDetails, onEditPost }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => onViewDetails(post.id)}>View</button>
          <button onClick={() => onEditPost(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
