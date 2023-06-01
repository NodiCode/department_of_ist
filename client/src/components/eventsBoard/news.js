import React from 'react'
import data from "../../data/news.json"
import "../../App.css"
import "./news.css"


const NewsEx = () => {
    return (
        <div id="news">
            <div className="container">
            <h2><span>Жанылыктар</span></h2>
                {data.map((news) => (
                    <div key={news._id} className="news_content">
                        <div><img src={news.image} alt=""></img></div>
                        <h6>{news.title}</h6>
                        <p>{news.date}</p>
                        <p>{news.content}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewsEx