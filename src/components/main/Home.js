import React, { Component } from "react";
import logo from "../../img/logo-white.png";
import logo_big_X2 from "../../img/logo-green-2x.png";
import logo_big_X1 from "../../img/logo-green-1x.png";
import nat_1_lg_img from "../../img/nat-1-large.jpg";
import nat_1_sm_img from "../../img/nat-1.jpg";
import nat_2_lg_img from "../../img/nat-2-large.jpg";
import nat_2_sm_img from "../../img/nat-2.jpg";
import nat_3_lg_img from "../../img/nat-3-large.jpg";
import nat_3_sm_img from "../../img/nat-3.jpg";
import nat_8_person_img from "../../img/nat-8.jpg";
import nat_9_person_img from "../../img/nat-9.jpg";

import bg_video_pm4 from "../../video/video.mp4";
import MediaQuery from "react-responsive";

class Home extends Component {
  state = { currentSrc: "" };
  onLoad = (event) => {
    this.setState({
      currentSrc: event.target.currentSrc,
    });
    console.log("event.target", event.target.currentSrc);
  };

  render() {
    return (
      <div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  About Natours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Your benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Popular Tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Book now
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
                  <MediaQuery maxDeviceWidth={400}>
                    <img
                      src={nat_1_sm_img}
                      alt="nat small"
                      className="composition__photo composition__photo--p1"
                    />
                    <img
                      src={nat_2_sm_img}
                      alt="nat small"
                      className="composition__photo composition__photo--p2"
                    />
                    <img
                      src={nat_3_sm_img}
                      alt="nat small"
                      className="composition__photo composition__photo--p3"
                    />
                  </MediaQuery>
                  <MediaQuery minDeviceWidth={401}>
                    <img
                      src={nat_1_lg_img}
                      alt="nat lg"
                      className="composition__photo composition__photo--p1"
                    />
                    <img
                      src={nat_2_lg_img}
                      alt="nat lg"
                      className="composition__photo composition__photo--p2"
                    />
                    <img
                      src={nat_3_lg_img}
                      alt="nat lg"
                      className="composition__photo composition__photo--p3"
                    />
                  </MediaQuery>
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-world feature-box__icon "></i>
                  <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                    Explore the world
                  </h3>
                  <p className="feature-box__text ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-compass feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-map feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, explicabo.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="  icon-basic-heart feature-box__icon"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                    Live a healthier life
                  </h3>
                  <p className="feature-box__text">
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
                      <a href="#popup" className="btn btn--white">
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
                      <a href="#popup" className="btn btn--white">
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
                      <a href="#popup" className="btn btn--white">
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
            <div className="bg-video">
              <video
                src={bg_video_pm4}
                type="vodeo/mp4"
                className="bg-video__content"
                autoPlay
                muted
                loop
              >
                {/* <source src={bg_video_pm4} type="vodeo/mp4" />
                <source src={bg_video_webm} type="vodeo/mp4" /> */}
                Your browser not support video
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                we make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat_8_person_img}
                    alt="nat-8"
                    className="story__image"
                  />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p className="story__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  consequatur a quos minima natus illum officia delectus quod!
                  Nulla, ratione! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sed consequatur a quos minima natus illum
                  officia delectus quod! Nulla, ratione! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sed consequatur a quos
                  minima natus illum officia delectus quod! Nulla, ratione!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  consequatur a quos minima natus illum officia delectus quod!
                  Nulla, ratione!
                </p>
              </div>
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat_9_person_img}
                    alt="nat-9"
                    className="story__image"
                  />
                  <figcaption className="story__caption">John Brown</figcaption>
                </figure>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p className="story__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  consequatur a quos minima natus illum officia delectus quod!
                  Nulla, ratione! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sed consequatur a quos minima natus illum
                  officia delectus quod! Nulla, ratione! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sed consequatur a quos
                  minima natus illum officia delectus quod! Nulla, ratione!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  consequatur a quos minima natus illum officia delectus quod!
                  Nulla, ratione!
                </p>
              </div>
            </div>
            <div className="u-center-text ">
              <a href="#" className=" btn-text">
                Read the all stories &rarr;
              </a>
            </div>
          </section>
          <section className="section-book">
            <div className="book">
              <div className="book__form">
                <form onSubmit={this._onSubmit} className="form">
                  <div className="u-center-text u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full Name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email
                    </label>
                  </div>
                  {/* Radio Buttons */}
                  <div className="form__group">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        {/* We cant style original radio buttons so we create own */}
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className=" u-margin-top-big">
                      <button type="submit" className="btn btn--green">
                        Next step &rarr;
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__logo-box">
            <img
              src={logo_big_X1}
              srcSet={`${logo_big_X1} 600w,${logo_big_X2} 1200w `}
              alt="logo"
              className="footer__logo"
              // onLoad={this.onLoad}
            />
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Contacts
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Privacy policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{" "}
                <a href="#" className="footer__link">
                  Oleg Smushkevich.
                </a>{" "}
                To be included in the{" "}
                <a href="#" className="footer__link">
                  Main Portfolio
                </a>
                .
                <br />
                <br />
                Copyright &copy; by Oleg Smushkevich
              </p>
            </div>
          </div>
        </footer>
        {/* POPUP of CARD */}
        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img
                src={nat_8_person_img}
                alt="tour pic "
                className="popup__img"
              />
              <img
                src={nat_9_person_img}
                alt="tour pic"
                className="popup__img"
              />
            </div>
            <div className="popup__right">
              <a href="#section-tours" className="popup__close">
                <ion-icon name="moon-outline"></ion-icon>
              </a>
              <h2 className="heading-secondary u-margin-bottom-medium">
                Start booking now
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read these terms before booking
              </h3>
              <p className="popup__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores culpa ad optio magni illum fugit, accusamus distinctio
                harum blanditiis nihil iste voluptates perferendis error veniam
                voluptate vero, autem officia libero numquam quasi possimus amet
                doloribus et. Molestias quo maiores, repellendus eveniet beatae,
                officia consequatur quis magnam, commodi fuga laudantium vitae!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores culpa ad optio magni illum fugit, accusamus distinctio
                harum blanditiis nihil iste voluptates perferendis error veniam
                voluptate vero, autem officia libero numquam quasi possimus amet
                doloribus et. Molestias quo maiores, repellendus eveniet beatae,
                officia consequatur quis magnam, commodi fuga laudantium vitae!
              </p>
              <div className="btn btn--green">Book now</div>
            </div>
          </div>
        </div>

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
