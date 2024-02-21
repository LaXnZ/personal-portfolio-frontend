import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/blogs');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div className="container" id="blogs">
      <div className="article">
        <h2>Recent Work</h2>
        <hr />
        <div className="rows">
          {blogs.map((blog) => (
            <div key={blog._id} className="shop col-lg-3 col-md-4 col-sm-6">
              <div className="shopBack">
                {/* <img src={blog.image} alt="recent" /> */}
                <div className="shoplebal">
                  <a href={`/blogs/${blog._id}`}>Read More</a>
                </div>
              </div>
              <div className="shoptext">
                <p>{blog.title}</p>
                <h3>{blog.content}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
