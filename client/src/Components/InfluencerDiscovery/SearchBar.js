
import React, { useState } from "react";
import "./SearchBar.css";
import ProfileCardList from "./ProfileCardList";

const SearchBar = ({ influencers, onSearch }) => {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredData = influencers.filter(influencer => {
      const nameMatch = influencer.firstName.toLowerCase().includes(searchName.toLowerCase());
      const locationMatch = influencer.city.toLowerCase().includes(searchLocation.toLowerCase());
      const categoryMatch = influencer.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return nameMatch && locationMatch && categoryMatch;
    });

    const sortedData = sortResults(filteredData);
    setSearchResults(sortedData);
    onSearch(sortedData);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
    handleSearch();
  };

  const sortResults = (data) => {
   
    switch (selectedSort) {
      case 'newest':
        return data.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
      case 'compatible':
        return data.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
      case 'nearest':
        return data.sort((a, b) => a.distance - b.distance);
      case 'popular':
        return data.sort((a, b) => b.followers - a.followers);
      default:
        return data;
    }
  };

  return (
    <div className="search-section" id="SSCT">
      <input
        type="text"
        className="search-input"
        id="SIIIN"
        placeholder="Search by name..."
        value={searchName}
        onChange={(event) => handleInputChange(event, setSearchName)}
        aria-label="Search by name"
      />
      <select
        className="dropdown-niche"
        id="DDNIC"
        value={selectedCategory}
        onChange={(event) => handleInputChange(event, setSelectedCategory)}
        aria-label="Select category"
      >
        <option value="beauty">Beauty</option>
        <option value="fashion">Fashion</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="healthcare">Healthcare</option>
        <option value="food">Food</option>
        <option value="entertainment">Entertainment</option>
        <option value="travel">Travel</option>
        <option value="education">Education</option>
        <option value="lifestyle">Lifestyle</option>
      </select>
      <input
        type="text"
        className="search-input"
        id="SIIIN"
        placeholder="Search by location..."
        value={searchLocation}
        onChange={(event) => handleInputChange(event, setSearchLocation)}
        aria-label="Search by location"
      />
      <div className="sort-section" id="SORRR">
        <span>Sort by:</span>
        <select
          className="dropdown-sort"
          id="DDSOO"
          value={selectedSort}
          onChange={(event) => handleInputChange(event, setSelectedSort)}
          aria-label="Select sort option"
        >
          <option value="newest">Newest</option>
          <option value="compatible">Most Compatible</option>
          <option value="nearest">Nearest Location</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
     
        <ProfileCardList influencers={searchResults} />
    
    </div>
  );
};

export default SearchBar;
