import axios from 'axios'
import React,{useEffect, useState} from 'react'

const App = () => {

  const [data, setData] = useState([])
   useEffect(() => {
    getData()
  }, [])
  

const getData = async ()=>{
   const response =  await axios.get("https://picsum.photos/v2/list")
   setData(response.data)

 
//    console.log(data[0].download_url) 
}
  return (
    <div className='p-10'>
      {/* <button  onClick={getData}className=' active:scale-95 bg-teal-700 text-white font-semibold rounded text-xxl px-6 py-4'>Get Data</button> */}
       <div className='p-5 text-xl text-white font-semibold bg-gray-900'>
        {data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-50 rounded mb-3 text-black flex items-center justify-between w-full px-7 py-6'>
           <img className='w-80' src={elem.download_url} alt="" />
           <h1>{elem.author}</h1>
            </div>
        })}
       </div>

    </div>
   
  )
}

export default App