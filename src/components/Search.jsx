import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({fetchData}) => {
  const [search, setSearch]= useState('');
  return (
    <div className='w-75 gap-3 align-items-center d-flex justify-content-center'>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Enter City Name' className='form-control w-100'/>
      <BsSearch className='fs-4 fw-bold' onClick={()=> fetchData(search) } />
    </div>
  )
}

export default Search
