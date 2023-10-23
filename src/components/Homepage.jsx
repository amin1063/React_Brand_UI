import React from 'react';

const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="left-content">
            <h1>Your Feets Deserve The Best</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.
            </p>
            <div className="Btn">
              <button className="left-button btn btn-danger">Shop now</button>
              <button className="left-button btn bg-info" style={{ marginLeft: '30px' }}>
                Category
              </button>
            </div>
          </div>

          <div className="shopping mt-5">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img 
              src="/images/amazon.jpg" alt="amazon-logo"
              style={{ width: '100px', height: '100px' }} />
              <img 
              src="/images/flipkart.jpg" alt="flipkart-logo"
              style={{ width: '100px', height: '100px' }} 
               />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Right side image */}
          <img
            src="images/shoes.jpg"
            alt="Image"
            className="img-fluid" // Bootstrap class for responsive images
            style={{ width: '350px', height: '350px' }} // Set width and make height auto for responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
