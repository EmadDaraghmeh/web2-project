import React, { useState } from 'react'
import './SideBar.css'
const SideBar = () => {
    const [countBeauty,setCountBeauty]=useState(0);
    const [countFashion,setCountFashion]=useState(0);
    const [countSports,setCountSports]=useState(0);
    const [countTechnology,setCountTechnology]=useState(0);
    const [countHealthcare,setCountHealthcare]=useState(0);
    const [countFood,setCountFood]=useState(0);
    const [countTravel,setCountTravel]=useState(0);
    const [countEducation,setCountEducation]=useState(0);
    const [followers,setFollowers]=useState(0);
  return (
    <>
    <div class="sidebar-container">
        <h1>Platform</h1>   
            <form className='form-group'>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Beauty</span>
                    <span className='num' dataVal="400">{countBeauty}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Fashion</span>
                    <span className='num' dataVal="400">{countFashion}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Sports</span>
                    <span className='num' dataVal="400">{countSports}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Technology</span>
                    <span className='num' dataVal="400">{countTechnology}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Healthcare</span>
                    <span className='num' dataVal="400">{countHealthcare}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Food</span>
                    <span className='num' dataVal="400">{countFood}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Travel</span>
                    <span className='num' dataVal="400">{countTravel}</span>
                </label>
                <label>
                    <input type="checkbox" name="name" />
                    <span>Education</span>
                    <span className='num' dataVal="400">{countEducation}</span>
                </label>
            </form>
            <div className='range'>
                <span>Min-followers</span>
                <span>{followers}</span>
                <input type='range' min={0} max={100000} step={100} value={followers} onChange={(e)=>setFollowers(e.target.value)}/>
            </div>
    </div>

    </>
  )
}

export default SideBar
