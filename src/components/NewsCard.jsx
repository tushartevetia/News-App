import React from 'react'

function NewsCard({newsItem}) {

  //to fetch the hours from date
  const fulldate= new Date(newsItem.publishedAt)
  var date = fulldate.toString().split(" ")
  const hour = parseInt(date[4].substring(0,2))
  const time = hour > 12 ? true : false
  
  return (
    <div className='newsCard'>
      <img alt={newsItem.title} src={newsItem.urlToImage ?
       newsItem.urlToImage :
       'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg'}
       className='newsCard-img' />
      <div className='newsCard-text'>
        <div className='newsCard-title'>
          <a href={newsItem.url} target="__blank">
            <span>
            {newsItem.title}
          </span>
          </a><br></br>
          <span className='newsCard-author'>
            <b>author:</b>{newsItem.author? newsItem.author : "unknown"}, Time:{" "}  
            {
              time ? `${hour-12}:${date[4].substring(3,5)} pm`: 
              `${hour}:${date[4].substring(3,5)} am`
            } on {date[2]} {date[1]} {date[3]}, {date[0]}
          </span>
        </div>

        <div className='newsCard-desc'>
          <div className='desc'>
            {newsItem.description}
          </div><br />
          <span className='readmore'>
            read more at {" "}
            <a href={newsItem.url} target="__blank">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard