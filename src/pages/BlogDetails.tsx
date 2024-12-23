import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Blog post deleted successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error deleting the post:", error);
      });
  };

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
