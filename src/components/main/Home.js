import React, { Component } from "react";
import logo from "../../img/logo-white.png";
import nat1largeImg from "../../img/nat-1-large.jpg";
import nat2largeImg from "../../img/nat-2-large.jpg";
import nat3largeImg from "../../img/nat-3-large.jpg";

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
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2 ">
                <div className="composition">
                  <img
                    src={nat1largeImg}
                    alt="nat-1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={nat2largeImg}
                    alt="nat-2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={nat3largeImg}
                    alt="nat-3"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-world feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="featur-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-compass feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Meet nature
                  </h3>
                  <p className="featur-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-map feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="featur-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-heart feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Live a healthier life
                  </h3>
                  <p className="featur-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tours ">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">Front</div>
                  <div className="card__side card__side--back">Back</div>
                </div>
              
              
              </div>
              <div className="col-1-of-3">Col 1 of 3</div>
              <div className="col-1-of-3">Col 1 of 3</div>
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
