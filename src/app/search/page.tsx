'use client';

import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearchInput = (term: any) => {
    setSearchTerm(term);
    // Perform your search logic here, e.g., fetch data from an API
  };

  const handleSearchSubmit = async () => {
    // Fetch restaurants and filter by tag based on searchTerm.
    const response = await fetch('http://127.0.0.1:4000/restaurants');

    if (response.ok) {
      // Filter restaurants and setFilteredRestaurants.
      const responseJson = await response.json();
      console.log(responseJson);

      const restaurants = responseJson.filter(
        (restaurant: { tags: string[] }) =>
          restaurant?.tags.includes(searchTerm.toLowerCase())
      );

      console.log(restaurants);
      setFilteredRestaurants(restaurants);
    }
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      {/* Add your search results or further UI here */}
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default SearchPage;
