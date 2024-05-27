
import React, { useState } from 'react';
import './FilterBy.css';


const initialPlatforms = [
  { name: 'Instagram', count: 56 },
  { name: 'Facebook', count: 64 },
  { name: 'Snapchat', count: 25 },
  { name: 'Youtube', count: 30 },
  { name: 'X', count: 12 },
];

const FilterBy = () => {
  const [minFollowers, setMinFollowers] = useState('1k');
  const [minPrice, setMinPrice] = useState('$200');
  const [verified, setVerified] = useState(false);
  const [platforms, setPlatforms] = useState(initialPlatforms);

  const convertFollowersToNumber = (value) => {
    if (value.toLowerCase().endsWith('k')) {
      return parseFloat(value) * 1e3;
    } else if (value.toLowerCase().endsWith('m')) {
      return parseFloat(value) * 1e6;
    }
    return parseFloat(value);
  };

  const convertNumberToFollowers = (value) => {
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}M`;
    } else if (value >= 1e3) {
      return `${Math.round(value / 1e3)}k`;
    }
    return value.toString();
  };

  const handlePriceChange = (value) => {
    setMinPrice(`$${value}`);
  };

  return (
    <div className="base-container" id="BC">
      <div className="platform-container" id="PC">
        <h3 className="base-heading" id="BH">Platform</h3>
        {platforms.map((platform, index) => (
          <label key={platform.name} className="base-label" id="BL">
            <input
              type="checkbox"
              className="base-checkbox" id="BAC"
            />
            {platform.name}
            <span className="platform-count" id="PLC">{platform.count}</span>
          </label>
        ))}
      </div>

      <div className="filter-container" id="FLC">
        <div className="filter-item" id="FI">
          <label htmlFor="min-followers">Min-followers</label>
          <input
            id="min-followers"
            type="range"
            min="1000"
            max="1000000"
            value={convertFollowersToNumber(minFollowers)}
            onChange={(e) => setMinFollowers(convertNumberToFollowers(e.target.value))}
          />
          <span>{minFollowers}</span>
        </div>

        <div className="filter-item" id='FI'>
          <label htmlFor="min-price">Min-price</label>
          <input
            id="min-price"
            type="range"
            min="200"
            max="10000"
            value={minPrice.replace('$', '')}
            onChange={(e) => handlePriceChange(e.target.value)}
          />
          <span>{minPrice}</span>
        </div>

        <div className="filter-item" id="FI">
          <label htmlFor="verified">Verified</label>
          <input
            id="verified"
            type="checkbox"
            checked={verified}
            onChange={() => setVerified(!verified)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
