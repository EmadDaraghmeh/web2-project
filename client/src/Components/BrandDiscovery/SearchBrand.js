import React, {  useState,useEffect } from "react";
import CardD from "./Card";
import "./SearchBrand.css";
import axios from 'axios'
// import {useParams} from 'react-router-dom'
const SearchBrand = () => {
  const [searchName, setSearchName] = useState("");
  const [restaurants,setRestaurants]=useState([])
  const [loading,setLoading]=useState(false)
  // const {id}=useParams()+
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:4000/brands`)
    .then((response)=>{
      setRestaurants(response.data["data"])
      setLoading(false)
    }).catch((error)=>{
      console.log(error.response.data)
      setLoading(false)
    })
  },[])
  const searchText = (event) => {
    setSearchName(event.target.value.toLowerCase());
  };

 
  let dataSearch = restaurants.filter((item) => {
    return item.brandName.toString().toLowerCase().includes(searchName);
  });
  console.log(searchName,'brands')

  
  return (
    <>
      <div className="search-brand-container">
        <input
          type="text"
          placeholder="search by name"
          id="search-input-brand"
          className="form-control"
          value={searchName}
          onChange={searchText}
        />
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
            id="loc"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          location
        </button>
        <div className="sort-by-container">
          <span>Sort By</span>
          <select className="select">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      {loading?(
      <p>loading ...</p>
    ):(
      dataSearch.map((restaurant) => (
        <CardD
          key={restaurant._id}
          city={restaurant.city}
          logo={restaurant.picture}
          type={restaurant.category}
          title={restaurant.brandName}
          content={ restaurant.cover}
          numberOfFollowers={restaurant.numberOfFollowers}
        />
      ))
      )}
      
    </>
  );
};

export default SearchBrand;
