
import React, { useState, useEffect } from 'react';
import './FilterBy.css';
import ProfileCardList from '../InfluencerDiscovery/ProfileCardList';

const FilterBy = ({ influencer }) => {
    const initialPlatforms = ['Instagram', 'Facebook', 'Snapchat', 'Youtube', 'X'];
    const [selectedPlatforms, setSelectedPlatforms] = useState(initialPlatforms);
    const [minFollowers, setMinFollowers] = useState(1000);
    const [minPrice, setMinPrice] = useState(200);
    const [filteredinfluencer, setFilteredinfluencer] = useState([]);

    useEffect(() => {
        if (influencer && influencer.length > 0) {
            const filteredData = influencer.filter(influencer => {
                const platformMatch = influencer.platform && selectedPlatforms.includes(influencer.platform.type);
                const followersMatch = parseInt(influencer.numberOfFollowers.replace('M', '')) >= minFollowers;
                const priceMatch = parseInt(influencer.price.replace('$', '')) >= minPrice;
                return platformMatch && followersMatch && priceMatch;
            });
            setFilteredinfluencer(filteredData);
        }
    }, [selectedPlatforms, minFollowers, minPrice, influencer]);

    const handlePlatformChange = (platform) => {
        const index = selectedPlatforms.indexOf(platform);
        if (index === -1) {
            setSelectedPlatforms([...selectedPlatforms, platform]);
        } else {
            setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
        }
    };

    const handlePriceChange = (value) => {
        setMinPrice(parseInt(value));
    };

    return (
        <div className="base-container" id="BC">
            <div className="platform-container" id="PC">
                <h3 className="base-heading" id="BH">Platform</h3>
                {initialPlatforms.map(platform => (
                    <label key={platform} className="base-label" id="BL">
                        <input
                            type="checkbox"
                            className="base-checkbox"
                            id="BAC"
                            onChange={() => handlePlatformChange(platform)}
                        />
                        {platform}
                    </label>
                ))}
            </div>

            <div className="filter-item" id="FI">
                <label htmlFor="min-followers">Min-followers</label>
                <input
                    id="min-followers"
                    type="range"
                    min="1000"
                    max="1000000"
                    value={minFollowers}
                    onChange={(e) => setMinFollowers(parseInt(e.target.value))}
                />
                <span>{minFollowers}</span>
            </div>

            <div className="filter-item" id='FI'>
                <label className="min-price">Min-price</label>
                <input
                    id="min-price"
                    type="range"
                    min="200"
                    max="10000"
                    value={minPrice}
                    onChange={(e) => handlePriceChange(e.target.value)}
                />
                <span>${minPrice}</span>
            </div>

            <ProfileCardList influencer={filteredinfluencer} />
        </div>
    );
};

export default FilterBy;



