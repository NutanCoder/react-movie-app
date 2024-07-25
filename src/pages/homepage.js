// src/LandingPage.js
import React from 'react';
import './homepage.css'; // Optional for custom styles
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <header className="jumbotron text-center my-5">
        <h1 className="display-4">Welcome to MovieMania</h1>
        <p className="lead">Discover and explore the latest movies.</p>
        <Link to="/trending" className="btn btn-secondary btn-lg">Explore Now</Link>
      </header>

      <section className="features my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="/path/to/icon1.png" alt="Feature 1" className="mb-3" />
            <h3>Feature 1</h3>
            <p>Discover top-rated movies.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/path/to/icon2.png" alt="Feature 2" className="mb-3" />
            <h3>Feature 2</h3>
            <p>Create your watchlist.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/path/to/icon3.png" alt="Feature 3" className="mb-3" />
            <h3>Feature 3</h3>
            <p>Get personalized recommendations.</p>
          </div>
        </div>
      </section>

      <section className="about my-5">
        <h2>About MovieMania</h2>
        <p>MovieMania is your go-to app for all things movies. From the latest blockbusters to timeless classics, we have it all. Join our community and start exploring today!</p>
      </section>
    </div>
  );
};

export default HomePage;
