import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import GifsList from '../components/GifsList'
import Search from '../components/Search'
import api from '../services/api/ImageService'
import hook from '../services/hooks'


function App() {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const [keyword, setKeyword] = useState("")

  const prevKeyword = hook.usePrevious(keyword)

  const fetchData=async()=>{
    let newOffset;
    if(isFetching){
      newOffset = offset + 12;
      setOffset(offset=>offset+12)
    }else{
      newOffset = offset
    }
    try {
      const request = await api.fetchGifs(newOffset, keyword) 
      if (request.status === 200) {
        const dataFetched = prevKeyword !== keyword ? request.data.data : data.concat(request.data.data)
        setData(dataFetched) 
      }   
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    if(isFetching){
      fetchData()
      setIsFetching(false)
    }

  }, [isFetching, data])
  
  

  return (
    <section className="main">
      <h2 className="title center">GIF FINDER</h2>
      <Search onSearch={fetchData} setKeyword={setKeyword} keyword={keyword}/>
      {data.length>0 ? <GifsList data={data} callback={setIsFetching}/> : <div className="center mt-3">Oops! no results</div>}
    </section>
  );
}

export default App;
