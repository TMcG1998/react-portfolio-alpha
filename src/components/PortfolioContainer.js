import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Header from './Header';
import Project from './Project';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Project />;
          }
          return <Contact />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
      );
}