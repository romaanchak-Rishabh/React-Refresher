import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((res) => res.json())
//     .then((data) => setData(data))
//   }, [])
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-3xl text-white'>Github Followers: {data.followers}</div>
        <img src={data.avatar_url} alt='img' width={300} />
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}