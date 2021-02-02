import React, { lazy, Suspense } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ActionLink from '../actionLink/ActionLink';

import { Link } from 'react-router-dom';
import slide1 from '../../assets/slide2_1.png';
import slide2 from '../../assets/slide2_2.png';
import actionLinkCss from '../actionLink/actionlink.module.css';
import './slidecss.css';
import slideCss from './slide.module.css';
// import slide3 from '../../assets/slide3.png';

const { downExpect } = actionLinkCss;
const { caption, linkCaption, carouselimage } = slideCss;
const Slide = () => (
  <Carousel

    controls={true}
    className="carousel" >

    <Carousel.Item className="carouselitem">
      <div id="carousel-overlay" >
        <div id="text"></div>
      </div>


      <Suspense fallback={<div class="loader"></div>}>
        <section>
          <img
            className={`d-block w-100 ${carouselimage}`}
            src={slide1}
            alt="Third slide"
          />
        </section>
      </Suspense>

      <Carousel.Caption className={caption}>
        <h3>We are in the business of sustainability</h3>
        <p><span><strong>TCSRN founded in 2006</strong></span>, is a consulting company that helps organisations to contribute to their societal goals of a philanthropic,
           activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
        {/* <div className="d-flex">
          <a aria-current="page" className="caption linkCaption" href="/" >EXPLORE SITE</a>
          <div className="down-expect">&darr;</div>
        </div> */}
        <ActionLink title={"EXPLORE SITE"} icon={<div className={downExpect}>&darr;</div>} />

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carouselitem">
      <div id="carousel-overlay" >
        <div id="text"></div>
      </div>

      <Suspense fallback={<div class="loader"></div>}>
        <section>
          <img
            className={`d-block w-100 ${carouselimage}`}
            src={slide2}
            alt="Third slide"
          />
        </section>
      </Suspense>

      <Carousel.Caption className={caption}>
        <h3>14th Edition of the SERAS CSR Awards</h3>
        <p>The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the 2nd of February, 2021</p>
        <div className="d-flex">
          <a aria-current="page" className={`${caption}  ${linkCaption}`} href="/" >MAKE RESERVATION</a>
          <div className="down-expect">&rarr;</div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel >
);

export default Slide;
