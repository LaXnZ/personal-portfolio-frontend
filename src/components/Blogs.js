import React from 'react';

const Blogs = () => {
  return (
    <div class="container" id="blogs">
    <div class="article">
      <h2>Recent Work</h2>
      <hr />
      <div class="rows">
        <div class="shop col-lg-3 col-md-4 col-sm-6">
          <div class="shopBack">
            {/* <img src=./assets/images/recent1.png alt="recent" /> */}
            <div class="shoplebal">
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="shoptext">
            <p>Sell And Buy App</p>
            <h3>
              Another app ever from zpnet company. Lorem Ipsum has been the
              industry's
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Blogs;
