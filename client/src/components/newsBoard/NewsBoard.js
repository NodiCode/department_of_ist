import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsBoard.css'
import "../../App.css"

function NewsBoard(props) {
  const{containerClassName}=props
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/news'); // Replace with your backend API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={containerClassName}>
      <h1>Жанылыктар</h1>
      <div className="news_cards">
      {data.map((article) => (
        <div key={article._id} className='news_card'>
          <img className='img'
            src={article.image}
            alt="news"
          />
          <h2 className="title">{article.title}</h2>
          <p className="content">{article.content}</p>
        </div>
      ))}
      </div>

    </div>
  );
}

export default NewsBoard;