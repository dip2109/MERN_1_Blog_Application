### Blogify - MERN Stack Blog Application

Welcome to the Blogify project repository! Blogify is a feature-rich web application designed to streamline the process of blogging, enabling users to create, edit, and share their thoughts seamlessly. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Blogify offers a modern, user-friendly interface alongside a powerful backend to deliver a smooth and engaging blogging experience. Users can register, log in, and manage their own posts, as well as explore blogs by categories or authors. With functionalities like profile picture updates, password changes, and real-time content management, Blogify is the go-to platform for anyone passionate about sharing ideas and engaging with content. Join us and start blogging today!

### Project Structure

- **Frontend:**
client/
├── public/
├── src/
│   ├── components/        
│   ├── context/           
│   ├── pages/             
│   ├── data.js         
│   ├── index.js
├── .env                   


**Backend:**
server/
├── controllers/
│   ├── postController.js  
│   ├── userController.js  
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js  
├── models/
│   ├── postModel.js       
│   ├── userModel.js
│   ├── errorModel.js 
├── routes/
│   ├── postRoutes.js      
│   ├── userRoutes.js    
├── uploads/               
├── .env                   
└── index.js               


### Features of Blogify

- **User Authentication:** Secure registration and login functionality using JWT, allowing users to manage their profiles and posts.
- **Create, Edit, and Delete Posts:** Users can easily create new blog posts, update existing ones, and delete posts they no longer need.
- **Profile Management:** Users can update their profile information, change passwords, and upload a new avatar/profile picture.
- **Category & Author-Based Browsing:** Explore blog posts based on categories or browse posts written by specific authors.
- **Real-Time Content Management:** Instantly see the updates after creating, editing, or deleting a post.
- **Rich Text Editing:** Compose blog posts using a user-friendly text editor with formatting options.
- **Search and Filter:** Search blog posts using keywords or filter by categories/authors to quickly find relevant content.
- **Responsive Design:** Blogify offers a seamless experience across devices, making it accessible on desktops, tablets, and mobile phones.
- **Secure Backend:** All sensitive information, such as passwords, is securely stored using hashing mechanisms, ensuring data protection.

### Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (for storing user information and blog posts)
- **Authentication:** JSON Web Tokens (JWT) for user authentication 
- **File Uploads:** Express-fileupload for handling profile pictures and other media
- **Security:** Bcrypt.js for password hashing and environment variables management using Dotenv
