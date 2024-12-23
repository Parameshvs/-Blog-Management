import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBlogs(blogs.filter((blog) => blog.id !== id)); 
      })
      .catch((error) => {
        console.log("Error deleting the blog:", error);
      });
  };

  return (
    <div>
      <h1>Home Page: List of Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}><p>{blog.title}</p></Link>
            <Link to={`/edit/${blog.id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Blog</Link>
    </div>
  );
};

export default Home;
