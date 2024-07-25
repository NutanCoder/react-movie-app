import React from 'react';
import { Link } from 'react-router-dom';
import netflix from '../assets/netflix.svg';
import popcorn from '../assets/popcorn.svg';
import sofa from '../assets/sofa.svg';

const HomePage = () => {
  return (
    <>
      <header className="text-center py-5 bg-primary text-white">
        <h1 className="display-4">Welcome to MovieMania</h1>
        <p className="lead">Discover and explore the latest movies.</p>
        <Link to="/trending" className="btn btn-secondary btn-lg">Explore Now</Link>
      </header>

      <section className='bg-white py-4'>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <img src={netflix} alt="Netflix image" className='w-100' />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>Watch Movie on Netflix</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, non ipsam cumque saepe fugiat facere. Nisi dolorem ea reprehenderit dolor,
                  accusantium voluptas aut est quaerat magnam tempore placeat! Atque, minus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-secondary-subtle py-4'>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>Enjoy Popcorn</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, non ipsam cumque saepe fugiat facere. Nisi dolorem ea reprehenderit dolor,
                  accusantium voluptas aut est quaerat magnam tempore placeat! Atque, minus!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={popcorn} alt="Popcorn image" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-4'>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <img src={sofa} alt="Sofa image" className='w-100' />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>Watch at Home</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, non ipsam cumque saepe fugiat facere. Nisi dolorem ea reprehenderit dolor,
                  accusantium voluptas aut est quaerat magnam tempore placeat! Atque, minus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default HomePage;
