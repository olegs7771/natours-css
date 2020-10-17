import React, { Component } from "react";
import logo from "../../img/logo-white.png";
import nat1large from '../../img/nat-1-large.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
          </div>

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">
                is where life happens
              </span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">
              Discover Our Tours
            </a>
          </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exiting tours for adventurous people
              </h2>
            </div>

            <div className="row">
              <div className="col-1-of-2 ">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  dolorum voluptatum eligendi corrupti, corporis harum culpa
                  possimus! Vel, distinctio nesciunt!
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live advantures like you never lived before
                </h3>
                <p className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, eos alias unde quod, quam repellat quisquam
                </p>
                <a href="#" className="btn-text">Learn more &rarr;</a>
              </div>
              <div className="col-1-of-2 ">

                <div className="composition">
                  <img src={nat1large} alt="" className="composition__photo composition_photo-p1"/>
                  <img src="" alt="" className="composition__photo composition_photo-p1"/>
                  <img src="" alt="" className="composition__photo composition_photo-p1"/>
                </div>
              </div>
            </div>
            
          </section>
        </main>

        {/* <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">Col 1 of 2</div>
            <div className="col-1-of-2">Col 1 of 2</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-2-of-3">Col 2 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-3-of-4">Col 3 of 4</div>
          </div>
        </section> */}
      </div>
    );
  }
}
export default Home;
