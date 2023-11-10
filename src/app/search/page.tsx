import React from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantList from './RestaurantList';

const page = () => {
  return (
    <div className="flex flex-col gap-4 pt-10 items-center justify-center">
      <SearchBar />
      <RestaurantList />
    </div>
  );
};

export default page;
