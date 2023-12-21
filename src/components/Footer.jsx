import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      copyright 
      <span> &copy; {currentYear}</span>
    </div>
  );
}

export default Footer;
