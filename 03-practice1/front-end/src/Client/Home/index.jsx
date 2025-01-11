import React from 'react';
import styles from './index.module.scss';

const Home = () => {
  return (
    <main>
      <section id={styles.home}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.homeInfo}>
                <h4>Process Visa Without Within Hours</h4>
                <h1>Immigrations & Visa Consultation</h1>
                <button>Book Consultancy</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://preview.colorlib.com/theme/immigration/img/header-img.png"
                alt="Header"
              />
            </div>
          </div>
        </div>
      </section>
      <section id={styles.second
      }>
        <div className="container">
          <h1>
          Our Unique Features that can impress you
          </h1>
          <p>
          Who are in extremely love with eco friendly system.
          </p>
          <div className={styles.companies}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Expert Technicians</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Professional Service</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Great Support</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Technical Skills</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Highly Recomended</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <h4>Positive Reviews</h4>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.blogs}>
        <div className="container">
          <h1>Latest News from our Blog</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className={styles.blogs}>
          <div className="row">
            <div className="col-12 col-md-6">
                <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
                <h3>
                Portable latest Fashion for young women
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="date">
                 <p>
                 {new Date().getDate()}.0{new Date().getMonth()+1}.{new Date().getFullYear()}
                 </p>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <img src="https://preview.colorlib.com/theme/immigration/img/b2.jpg" alt="" />
                <h3>
                Portable latest Fashion for young women
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="date">
                  <p>
                  {new Date().getDate()}.0{new Date().getMonth()+1}.{new Date().getFullYear()}
                  </p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
