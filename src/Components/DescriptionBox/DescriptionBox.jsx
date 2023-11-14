import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quos, aliquid officia esse similique aspernatur placeat iusto blanditiis dolores provident illum quibusdam, iure officiis omnis eos alias corporis, amet magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, vitae et neque architecto laudantium veniam repudiandae</p>
        </div>
    </div>
  )
}

export default DescriptionBox