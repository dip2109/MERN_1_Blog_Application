import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

// Importing locales
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      if (!authorID) return;

      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
        setAuthor(response?.data);
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };

    getAuthor();
  }, [authorID]);

  // Check if createdAt is valid and avoid NaN issues
  const isValidDate = createdAt && !isNaN(new Date(createdAt).getTime());

  return (
    <Link to={`/posts/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img 
        src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} 
        alt={author?.name || 'Author'} />
      </div>
      <div className="post__author-details">
        <h5>By: {author?.name || 'Unknown Author'}</h5>
        <small>
          {isValidDate ? (
            <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
          ) : (
            'Unknown Time'
          )}
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
