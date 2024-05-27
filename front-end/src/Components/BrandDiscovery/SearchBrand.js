import React, {  useState,useEffect } from "react";
import CardD from "./Card";
import "./SearchBrand.css";
import axios from 'axios'
import "./SideBar.css";
// import {useParams} from 'react-router-dom'
const SearchBrand = () => {
  const [searchName, setSearchName] = useState("");       
  const [searchCity, setSearchCity] = useState("");       
  const [restaurants,setRestaurants]=useState([])
  const [loading,setLoading]=useState(false)
  const [countBeauty, setCountBeauty] = useState(0);
  const [countFashion, setCountFashion] = useState(0);
  const [countSports, setCountSports] = useState(0);
  const [countTechnology, setCountTechnology] = useState(0);
  const [countHealthcare, setCountHealthcare] = useState(0);
  const [countFood, setCountFood] = useState(0);
  const [countTravel, setCountTravel] = useState(0);
  const [countEducation, setCountEducation] = useState(0);
  const [followers, setFollowers] = useState(0);
  // const [checkbox, setCheckBox] = useState("");
 
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:4000/brands`)
    .then((response)=>{
      setRestaurants(response.data)
      setLoading(false)
    }).catch((error)=>{
      console.log(error.response.data)
      setLoading(false)
    })
  },[])
  const searchText = (event) => {
    setSearchName(event.target.value.toLowerCase());
  };
  const searchTextCity = (event) => {
    setSearchCity(event.target.value.toLowerCase());
  };

  const minFollowers=(event)=>{
    setFollowers(event.target.value.toLowerCase())

  }
  let dataSearch = restaurants.filter((item) => {
    const searchBranName= item.brandName.toString().toLowerCase().includes(searchName);
    const searchBranCity= item.country.toString().toLowerCase().includes(searchCity);
    const searchByFollowers= Object.values(item.socialMedia).some(app=>app.numberOfFollowers >= followers)
    return searchBranName && searchBranCity &&searchByFollowers
  });
  
  const handleCheckBox=(type,counter)=>(e)=>{
    if(e.target.checked){
      let count=0
      restaurants.forEach((restaurant)=>{
        if(restaurant.categories && restaurant.categories[type]){
          count +=restaurant.categories[type].numberOfUser ||0
        }
      })
      counter(count)
    }else{
        counter(0)
    }
  }
  return (
    <>
    <div className='search-and-sidebar-container'>
     <div className="sidebar-container">
        <h1>Platform</h1>
        <form className="form-group" id="form-sidebar">
          <label>
            <input type="checkbox" value="Beauty" name="name"  onChange={handleCheckBox("Beauty", setCountBeauty) }/>
            <span >Beauty</span>
            <span className="num" dataVal="400">
              {countBeauty}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Fashion" onChange={handleCheckBox("Fashion", setCountFashion)  }/>
            <span>Fashion</span>
            <span className="num" dataVal="400">
              {countFashion}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Sports" onChange={handleCheckBox("Sports", setCountSports)}/>
            <span>Sports</span>
            <span className="num" dataVal="400">
              {countSports}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Technology" onChange={handleCheckBox("Technology", setCountTechnology)}/>
            <span>Technology</span>
            <span className="num" dataVal="400">
              {countTechnology}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Food" onChange={handleCheckBox("Healthcare", setCountHealthcare) }/>
            <span>Healthcare</span>
            <span className="num" dataVal="400">
              {countHealthcare}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Food" onChange={handleCheckBox("Food", setCountFood) }/>
            <span>Food</span>
            <span className="num" dataVal="400">
              {countFood}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" value="Travel" onChange={handleCheckBox("Travel", setCountTravel)}/>
            <span>Travel</span>
            <span className="num" dataVal="400">
              {countTravel}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name"  value="Education" onChange={handleCheckBox("Education", setCountEducation) }/>
            <span>Education</span>
            <span className="num" dataVal="400">
              {countEducation}
            </span>
          </label>
        </form>
        <div className="range">
          <span>Min-followers</span>
          <span>{followers}</span>
          <input
            type="range"
            min={0}
            max={100000}
            step={100}
            value={followers}
            onChange={minFollowers}
          />
        </div>
      </div>
      <div className="filter-brand">
      <div className="search-brand-container">
        <input
          type="text"
          placeholder="search by name"
          id="search-input-brand"
          className="form-control"
          value={searchName}
          onChange={searchText}
        />
        <button className="btn-location">
        <input
          type="text"
          placeholder="search by cities"
          id="search-input-brand"
          className="form-control"
          value={searchCity}
          onChange={searchTextCity}
        />
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
        </button></div>
        <div className="sort-by-container">
          <span>Sort By</span>
          <select className="select">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      
      {loading?(
      <p>loading ...</p>
    ):(
      dataSearch.map((restaurant) => (
        <CardD
          key={restaurant._id}
          city={restaurant.city}
          logo={restaurant.picture}
          type={restaurant.categories.type}
          title={restaurant.brandName}
          content={ restaurant.cover}
          socialMedia={restaurant.socialMedia}
        />
      ))
      )}
      </div>
      </div>
    </>
  );
};

export default SearchBrand;
