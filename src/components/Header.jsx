import React, { useState, useEffect } from 'react';
import "../styles/header.scss"

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='header'>
        <nav className='header-nav'>
            <a href="/">Home</a>
            <a href={isMobile ? "/project" : "/screensix"}>Products</a>
            <a href="/bespokeint">BeSpoke</a>
            <a href="/enquiry">Enquiry</a>
        </nav>
    </header>
  );
}

export default Header;