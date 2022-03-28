import React from 'react'

function NewsFooter() {
  return (
    <div className='footer'>
        <div className='footer-text'>
            Copyright &copy; All Rights Reserved, 2022, Tushar Tevetia
        </div>
        <hr style={{width: '90%' }}/>
        <div className='footer-icons'>
            <a href='https://www.instagram.com/tushar_tevetia/'>
              <i className='fab fa-instagram-square fa-2x'></i>
            </a>
            <a href='https://www.linkedin.com/in/tushar-tevetia-4ab140153/'>
            <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href='https://www.facebook.com/tushar.tevetia/'>
            <i className="fa-brands fa-facebook-square fa-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default NewsFooter