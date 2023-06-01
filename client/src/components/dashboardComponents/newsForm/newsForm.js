import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsForm = ({ token }) => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('/api/news');
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNews = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/news',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNews([...news, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNews = async (newsId) => {
    try {
      await axios.delete(`/api/news/${newsId}`, { headers: { Authorization: `Bearer ${token}` } });
      setNews(news.filter((item) => item._id !== newsId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>News Form</h2>
      <form onSubmit={addNews}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit">Add News</button>
      </form>
      <ul>
        {news.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <button onClick={() => deleteNews(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsForm;