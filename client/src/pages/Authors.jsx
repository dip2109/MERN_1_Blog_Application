import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'

// import Avatar1 from '../images/avatar1.jpg'
// import Avatar2 from '../images/avatar2.jpg'
// import Avatar3 from '../images/avatar3.jpg'
// import Avatar4 from '../images/avatar4.jpg'
// import Avatar5 from '../images/avatar5.jpg'

// const authorsData = [
//   { id: 1, avatar: Avatar1, name: 'Dipali GAngarde', posts: 3 },
//   { id: 2, avatar: Avatar1, name: 'Dipali GAngarde', posts: 8 },
//   { id: 3, avatar: Avatar1, name: 'Dipali GAngarde', posts: 0 },
//   { id: 4, avatar: Avatar1, name: 'Dipali GAngarde', posts: 3 },
//   { id: 5, avatar: Avatar1, name: 'Dipali GAngarde', posts: 1 }
// ]

const Authors = () => {
  const [authors, setAuthors] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
        setAuthors(response.data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    getAuthors();
  }, [])


if(isLoading) {
  return <Loader/>
}


  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({ _id: id, avatar, name, posts }) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="Image of ${name}" />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className="center">No user/authors found.</h2>
      }
    </section>
  )
}

export default Authors