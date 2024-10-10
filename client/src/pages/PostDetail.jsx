import React, {useContext, useEffect, useState} from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link, useParams} from 'react-router-dom'
// import Thumbnail from '../images/blog22.jpg'
import Loader from '../components/Loader'
import DeletePost from './DeletePost'
import {UserContext} from '../context/userContext'
import axios from 'axios';



const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  // const [creatorID, setCreatorID] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  // useEffect(() => {
  //   const getPost = async () => {
  //     setIsLoading(true);
  //     try{
  //       const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
  //       setPost(response.data)
  //       // setCreatorID(response.data.creator)
  //     }catch(error){
  //       setError(error);
  //       // setError(error?.response?.data?.message || error.message || 'An unexpected error occurred.');
  //       // setError(error?.response?.data?.message || 'An unexpected error occurred.');
  //     }
  //     setIsLoading(false);
  //   }

  //   getPost();
  // }, [])

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {withCredentials:true, headers: {Authorization: `Bearer ${token}`}});
        setPost(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'An unexpected error occurred.'); // Get error message
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [id]); // Include id in the dependency array

  if(isLoading){
    return <Loader/>;
  }


  return (
    <section className="post-detail">
       {error && <p className='error'>{String(error)}</p>} {/* Convert error to string */}
      {/* {error && <p className='error'>{error}</p>} */}
      {post && <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          {currentUser?.id == post?.creator && <div className="post-detail__buttons">
            <Link to={`/post/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
            <DeletePost postId={id}/>
            {/* <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link> */}
          </div>}
        </div>

        {/* <h1>This is the post title</h1> */}
        <h1>{post.title}</h1>
        <div className="post-detail__thumbnail">
          {/* <img src={post.thumbnail} alt="" /> */}
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
        </div>
        <p dangerouslySetInnerHTML = {{__html: post.description}}></p>
        </div>}
    </section>
  )
}

export default PostDetail