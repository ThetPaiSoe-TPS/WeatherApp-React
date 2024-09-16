import React from 'react'

const Card = ({data}) => {
  console.log(data);
  
  if(JSON.stringify(data) !== '{}'){
    return (
      <>
          <div className='d-flex justify-content-center gap-2 align-items-center flex-column'>
              <p>Nov 10, 10:43pm</p>
              <h2> {data.name} {data.sys.country} </h2>
              <h1> <img src={`http://openweathermap.org//img//w/${data.weather[0].icon}.png`} alt="" /> {data.main.temp}C</h1>
              <p className="text-md fw-bold fs-4">{data.weather[0].main}</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Visibility: {parseInt(data.visibility)/ 1000}km</p>
          </div>
      </>
    )
  }
  else{
    <h2>Loading</h2>
  }
  
  
  

    



}

export default Card
