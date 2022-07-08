import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          return <Contact />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}