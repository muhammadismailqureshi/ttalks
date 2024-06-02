import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import postsData from './posts.json';
import './styles.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;


  useEffect(()=>{
    fetchPosts();
  }, []);

  const fetchPosts = () =>{
    setPosts(postsData);
  };

  const handleSearchChange = (e) =>{
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange =(pageNumber)=>{
    setCurrentPage(pageNumber);
  };
    
  return(
    <div className="App">
      <Header />
      <main>
        <input 
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        <section id='posts'>
          {currentPosts.map((post) => (
            <Post key={post.id} title={post.title} content={post.content} />
          ))}
        </section>
        <Pagination 
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </main>
      <Footer />
    </div>
  );
};

const Pagination =  ({totalPages, currentPage, handlePageChange}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={()=> handlePageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );

};



export default App;