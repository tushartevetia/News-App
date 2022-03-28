
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NewsContent from './components/NewsContent';
import NewsFooter from './components/NewsFooter';
import NewsNav from './components/NewsNav';
import NewsSearch from './components/NewsSearch';
import apikey from './data/config'
import {ToastContainer} from 'react-toastify'

function App() {
  const [category, setCategory] =useState('general')
  const [newsArray, setNewsArray]= useState([])
  const [newsResults, setNewsResults]= useState()
  const [loadmore, setLoadMore]= useState(10)

  //Fetching data from the api
  const newsApi = async () =>{
    try {
      
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)

    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    newsApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category,loadmore])
  

  return (
    <>
    <ToastContainer />
    <NewsNav setCategory={setCategory} />
    <NewsSearch setNewsArray={setNewsArray} setNewsResults={setNewsResults} />
    <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore ={loadmore} setLoadMore={setLoadMore}/>
    <NewsFooter />
    </>
  );
}

export default App;
