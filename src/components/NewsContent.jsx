import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from './NewsCard'

function NewsContent({newsArray,newsResults,setLoadMore, loadmore}) {
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div>
                {/* Search bar Field */}
            </div>
            
            {
              newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title} />
              ))
            }

           {loadmore<= newsResults &&( 
           <button className='btn-loadmore' onClick={()=> setLoadMore(loadmore+20)} >
                Load More
                </button>)
            }
        </div>
    </Container>
  )
}

export default NewsContent