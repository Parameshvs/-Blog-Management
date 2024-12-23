import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch(`http://localhost:5000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBlog = { title, content };

  
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      {blog ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
          <button type="submit">Update Blog</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditBlog;
