import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <ul className="footer__categories">
      <li><Link to="/post/categories/Agriculture">Agriculture</Link></li>
      <li><Link to="/post/categories/Business">Business</Link></li>
      <li><Link to="/post/categories/Education">Education</Link></li>
      <li><Link to="/post/categories/Entertainment">Entertainment</Link></li>
      <li><Link to="/post/categories/Art">Art</Link></li>
      <li><Link to="/post/categories/Investment">Investment</Link></li>
      <li><Link to="/post/categories/Uncategprized">Uncategprized</Link></li>
      <li><Link to="/post/categories/Weather">Weather</Link></li>
    </ul>
    <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
    </div>
   </footer>
  )
}

export default Footer