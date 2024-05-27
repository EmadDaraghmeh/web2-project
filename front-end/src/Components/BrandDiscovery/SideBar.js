// import React, { useState, useEffect } from "react";
// import "./SideBar.css";
// import axios from "axios";
const SideBar = () => {
//   const [countBeauty, setCountBeauty] = useState(0);
//   const [countFashion, setCountFashion] = useState(0);
//   const [countSports, setCountSports] = useState(0);
//   const [countTechnology, setCountTechnology] = useState(0);
//   const [countHealthcare, setCountHealthcare] = useState(0);
//   const [countFood, setCountFood] = useState(0);
//   const [countTravel, setCountTravel] = useState(0);
//   const [countEducation, setCountEducation] = useState(0);
//   const [followers, setFollowers] = useState(0);
//   const [restaurants, setRestaurants] = useState([]);
//   const [index,setIndex]=useState(0)
//   useEffect(() => {

//     axios
//       .get(`http://localhost:4000/brands`)
//       .then((response) => {

//         setRestaurants(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   }, []);

//   const handleCheckBox=(type,counter)=>(e)=>{
//     if(e.target.checked){
//         counter(restaurants[index]?.categories[type]?.numberOfUser || 0)
//     }else{
//         counter(0)
//     }
//   }
  return (
    <>
      <div >
        {/* <h1>Platform</h1>
        <form className="form-group">
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Beauty", setCountBeauty)}/>
            <span>Beauty</span>
            <span className="num" dataVal="400">
              {countBeauty}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Fashion", setCountFashion)}/>
            <span>Fashion</span>
            <span className="num" dataVal="400">
              {countFashion}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Sports", setCountSports)}/>
            <span>Sports</span>
            <span className="num" dataVal="400">
              {countSports}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Technology", setCountTechnology)}/>
            <span>Technology</span>
            <span className="num" dataVal="400">
              {countTechnology}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name"  onChange={handleCheckBox("Healthcare", setCountHealthcare)}/>
            <span>Healthcare</span>
            <span className="num" dataVal="400">
              {countHealthcare}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name"  onChange={handleCheckBox("Food", setCountFood)}/>
            <span>Food</span>
            <span className="num" dataVal="400">
              {countFood}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Travel", setCountTravel)}/>
            <span>Travel</span>
            <span className="num" dataVal="400">
              {countTravel}
            </span>
          </label>
          <label>
            <input type="checkbox" name="name" onChange={handleCheckBox("Education", setCountEducation)}/>
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
            onChange={(e) => setFollowers(e.target.value)}
          />
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
