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

            {/* TOUR CARDS */}
            <div className="row">
              {/* FIRST CARD */}
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        the sea explorer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 days tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND CARD */}
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        the forest hiker
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 days tours</li>
                        <li> Up to 30 people</li>
                        <li> 2 tour guides</li>
                        <li>Sleep in cozy hotels </li>
                        <li>Difficulty:easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* THIRD CARD */}
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        the snow adventurer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 days tours</li>
                        <li> Up to 30 people</li>
                        <li> 2 tour guides</li>
                        <li>Sleep in cozy hotels </li>
                        <li>Difficulty:easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-big">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </section>
          <section className="section-stories">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                we make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">image</figure>
                <h3 className="heading-tertiary margin">
                  I had the best week ever with my family
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur a quos minima natus illum officia delectus quod! Nulla, ratione!</p>
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
