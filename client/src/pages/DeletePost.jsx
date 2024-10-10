// import React, { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/userContext';
// import {Link} from 'react-router-dom'

// const DeletePost = () => {
//   const navigate = useNavigate();

//   const {currentUser} = useContext(UserContext)
//   const token = currentUser?.token;

//   // redirect to login page for any user who is not logged in
//   useEffect(() => {
//     if (!token) {
//         navigate('/login');
//     }
// }, []); 


//   return (
//     // <div>DeletePost</div>
//     <Link className='btn sm danger'>Delete</Link>
//   )
// }

// export default DeletePost

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const DeletePost = (postId: id) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false)

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who is not logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); // Added token and navigate as dependencies


  const removePost = async () => {
    setIsLoading(true)
    try{
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {withCredentials:true, headers: {Authorization: `Bearer ${token}`}})
      if(response.status ==200){
        if(location.pathname == `/myposts/${currentUser.id}`){
          navigate(0)
        } else{
          navigate('/')
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.log("Couldn't delete post.")
    }
  }


  if(isLoading) {
    return <Loader/>
  }

  return (
    <Link className='btn sm danger' onClick={() => removePost(id)}>
      Delete
    </Link>
  );
};

export default DeletePost;
