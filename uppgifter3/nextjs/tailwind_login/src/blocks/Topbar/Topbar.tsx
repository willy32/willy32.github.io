import React from 'react';
import Logo from '../../components/Logo/Logo';

const Topbar = () => {
  return (
    <div className="absolute flex justify-center lg:justify-start w-full p-4">
        <Logo />
    </div>
  );
};

export default Topbar;