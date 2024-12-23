import React, { useState } from 'react';
import { createPost, updatePost } from '../api/blogApi';
import { BlogPost } from '../types/Post';

interface Props {
  existingPost?: BlogPost;
  onSuccess: () => void;
}

const BlogForm: React.FC<Props> = ({ existingPost, onSuccess }) => {
  const [title, setTitle] = useState(existingPost?.title || '');
  const [content, setContent] = useState(existingPost?.content || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (existingPost) {
      await updatePost(existingPost.id, { title, content });
    } else {
      await createPost({ title, content });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{existingPost ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default BlogForm;
