import axios from 'axios'
import React, { useState } from 'react'
import apikey from '../data/config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function NewsSearch({setNewsArray,setNewsResults}) {
    const [searchText,setSearchText] = useState('')

    const handleSearch=(e)=>{
        setSearchText(e.target.value)
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(searchText === ''){
            toast.error('Search can not be empty')
        }
        else{
            const searchApi = async (searchText) =>{
                try {
                  
                  const searchNews = await axios.get(`https://newsapi.org/v2/top-headlines?q=${searchText}&country=in&apiKey=${apikey}`)
                  setNewsArray(searchNews.data.articles)
                  setNewsResults(searchNews.data.totalResults)
                  
                  if(searchNews.data.totalResults === 0){
                      toast.error('Oops! No news available currently')
                  }
            
                } catch (error) {
                  toast.error('Could not fetch news!')
                  
                }
                
              }
              searchApi(searchText)
        }
        setSearchText('')
    }

   

  return (
    <div className='news-search'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='relative'>
                    <input type="text" placeholder='Search News' 
                    value={searchText}
                    onChange={handleSearch} />
                    <button type='submit'>
                    <i className="fas fa-search fa-1x"></i>
                    </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default NewsSearch