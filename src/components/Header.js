import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold underline transform hover:scale-105">MyStore</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
