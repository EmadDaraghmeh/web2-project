
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../InfluencerDiscovery/SearchBar';
import FilterBy from '../InfluencerDiscovery/FilterBy';

import ProfileCardList from '../InfluencerDiscovery/ProfileCardList';
function All() {
    const [influencers, setInfluencers] = useState([]);
    const [filters, setFilters] = useState({});
    const [searchParams, setSearchParams] = useState({ });

    useEffect(() => {
        fetchInfluencers();
    }, [searchParams, filters]);

    const fetchInfluencers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/influencer', {
                params: { ...searchParams, ...filters } 
            });
            setInfluencers(response.data);
        } catch (error) {
            console.error('Failed to fetch influencers', error.response.data);
        }
    };

    const handleSearch = (params) => {
        setSearchParams(params);
    };

    const handleFilter = (params) => {
        setFilters(params);
    };

    return (
        <>
				

                  <SearchBar onSearch={handleSearch} influencers={influencers} />   
            <FilterBy onFilter={handleFilter} influencers={influencers}/>
           
              
        </>
    );
}

export default All;

