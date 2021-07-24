import React from 'react'

export default function Catagory() {
    return (
        <div>
        <div className='container'>
       <h1>Categories</h1>
       </div>
      <div class="container categories">
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center cat1">
            <h1>Watch</h1>
            <img src="categories/watch.png" alt="" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center cat2">
            <h1>Bag</h1>
            <img src="categories/bag.png" alt=""/>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center cat3">
            <h1>Shoes</h1>
            <img src="categories/shoes.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
