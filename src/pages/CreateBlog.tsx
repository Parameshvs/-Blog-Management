import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const newBlog = {
      title,
      content
    };


    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    })
      .then((response) => response.json())
      .then(() => {
       
        navigate('/');
      })
      .catch((error) => console.error('Error creating blog:', error));
  };

  return (
    <div className="form-container">
      <h2>Create New Blog</h2>
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
        ></textarea>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
