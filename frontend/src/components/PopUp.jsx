import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const PopUp = ({ onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-xl font-bold mb-4'>Welcome to Ephora</h2>
        <p className='mb-4'>Ephora is a platform where you can share and view photos and videos with your friends and family but whatever you do lasts for 24 hours. Please adhere to the following rules:</p>
        <ul className='list-disc list-inside mb-4'>
          <li>Your posts,stories and messages would last only upto a day</li>
          <li>Do not post inappropriate content.</li>
          <li>Follow community guidelines.</li> <Link to='https://ggeorge185.github.io/Ephorainfo/' className='text-blue-600'>Learn More</Link>
        </ul>
        <div className='mt-4 text-center'>
        <Button onClick={onClose}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
