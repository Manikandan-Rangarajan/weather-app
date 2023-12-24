import React, { useState } from 'react'

import { styles } from './styles'

const api = {
    key : "8060935c717ca1fad7725a51a46fbb19",
    base : "https://api.openweathermap.org/data/2.5/"
}

const Search = () => {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = ()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(data => setWeather(data));
    // console.log("searching")
  }

  return (
    <>
      <div className={`${styles.paddingX} w-[500px] h-[500px] relative mt-5 flex flex-col flex-wrap mx-auto
       bg-slate-400 bg-opacity-50 rounded-2xl`}>
         <div className='mt-5 flex flex-col w-full'>
            <input type="text" className='mx-auto bg-transparent border-solid border-2 border-slate-6=400 
            outline-none px-3 py-3 text-center' placeholder='Enter Your City Here...'
              onChange={(e)=>setSearch(e.target.value)}/>
            <button className='btn mt-5 mx-auto hover:text-red-400' onClick={searchPressed}>Submit</button>
         </div>

          <p>{weather.name}</p>
         {typeof weather.main != "undefined"? <p>{weather.main.temp}</p> : "" }
         {typeof weather.main != "undefined"? <p>{weather.weather[0].main}</p> : "" }
         {typeof weather.main != "undefined"? <p>{weather.weather[0].description}</p> : "" }
         {typeof weather.main != "undefined"? <img src={weather.weather[0].icon} alt=""/> : ""}
        
      </div>
    </>
  )
}

export default Search
