import React, { useState, useEffect } from 'react';
import './FilterBy.css';
import ProfileCardList from '../InfluencerDiscovery/ProfileCardList';

const FilterBy = ({ influencers, onFilter, filters }) => {
    const initialPlatforms = ['Instagram', 'Facebook', 'Snapchat', 'Youtube', 'X'];

    const [selectedPlatforms, setSelectedPlatforms] = useState(initialPlatforms);
    const [minFollowers, setMinFollowers] = useState(1000);
    const [minPrice, setMinPrice] = useState(200);
    const [filteredInfluencers, setFilteredInfluencers] = useState([]);

    useEffect(() => {
        if (influencers && influencers.length > 0) {
            const filteredData = influencers.filter(influencer => {
                const platformMatch = influencer.platform && selectedPlatforms.includes(influencer.platform.type);
                // Convert price to a string if it's not already
                const priceAsString = influencer.price ? influencer.price.toString() : '0';
                const followersMatch = influencer.numberOfFollowers && parseInt(influencer.numberOfFollowers.replace('M', '')) >= minFollowers;
                const priceMatch = parseInt(priceAsString.replace('$', '')) >= minPrice;
                return platformMatch && followersMatch && priceMatch;
            });
            
            setFilteredInfluencers(filteredData);
        }
    }, [selectedPlatforms, minFollowers, minPrice, influencers]);

    const handlePlatformChange = (platform) => {
        const index = selectedPlatforms.indexOf(platform);
        let newSelectedPlatforms;
        if (index === -1) {
            newSelectedPlatforms = [...selectedPlatforms, platform];
        } else {
            newSelectedPlatforms = selectedPlatforms.filter(p => p !== platform);
        }
        setSelectedPlatforms(newSelectedPlatforms);
        // Call the onFilter prop with the updated platforms
        onFilter({ ...filters, platform: newSelectedPlatforms });
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
                            checked={selectedPlatforms.includes(platform)}
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

            <ProfileCardList influencers={filteredInfluencers} />
        </div>
    );
};

export default FilterBy;
