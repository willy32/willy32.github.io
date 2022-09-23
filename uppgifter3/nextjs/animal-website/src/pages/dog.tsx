import React from 'react';
import getDefaultPageLayout from '../layouts/DefaultPageLayout/DefaultPageLayout';

const Dog = () => {
  return (
    <div>
        Doggo
    </div>
  );
};

Dog.getLayout = getDefaultPageLayout;

export default Dog;