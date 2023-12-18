import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      copyright 
      <span> &copy; {currentYear}</span>
    </div>
  );
}

export default Footer;
