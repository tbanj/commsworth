import React, { Fragment, Suspense } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import BodyTitle from '../bodyTitle/BodyTitle';
import BodyService from '../service/BodyService';
import BodyProject from '../project/BodyProject';
import Fade from 'react-reveal/Fade';
import ActionLink from '../actionLink/ActionLink';
import ourStory1 from '../../assets/our-story-1-12.png';
import ourStory2 from '../../assets/our-story-2.png';
import bodyCss from './bodyhome.module.css';
import actionLinkCss from '../actionLink/actionlink.module.css';
import Partners from '../partners/Partners';



const { abtDash, fz20, fz24, centerD, fClr, about, aboutContent, fClrDark, aboutSec, ImgOurStory2, truBlue,
  fontProN, fontAvenir, trucontactBGLight } = bodyCss;
const { downExpect } = actionLinkCss;
const BodyHome = () => (
  <Fragment>
    <main className={`body-home`}>
      {/* About US */}
      <section id={aboutSec} className={trucontactBGLight}>
        <section className="col-md-10 offset-md-1">
          <section className={`d-flex `}>
            <BodyTitle content={"ABOUT US"} />
            <div style={{ flex: 7 }} className={`${centerD}  `}>
              <p className={`${fz20} ${fClrDark} ${aboutContent} ${fontProN}`} style={{ width: "85%" }}>
                <strong>TCSRN founded in 2006</strong>, is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.
           </p>
            </div>
          </section>

          {/* Our Story */}
          <section className={`d-flex `}>
            <div className="" style={{ flex: 2 }}>
              {/* <img src={ourStory1} alt="our-story-1" /> */}
              <Suspense fallback={<div class="loader"></div>}>
                <section>
                  <img src={ourStory1} alt="our-story-1" />
                </section>
              </Suspense>
            </div>
            <div style={{ flex: 5 }} className={` ${fClrDark}`}>
              <div className="mx-5">
                <div className={`ml-4 ${fz24} ${fClr} ${about} ${fontAvenir} `}>Our Story</div>
                <p className={`my-3  ${fz20}  ${aboutContent} ${fontProN}`}>
                  The TruContact CSR Nigeria seed was sown long before the founder; <b>Kenneth Egbas</b> would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.

</p>
              </div>
            </div>
          </section>

          <section className={`d-flex `}>
            <div className="" style={{ flex: 2 }}>

              <div className="mr-2">

                <Suspense fallback={<div class="loader"></div>}>
                  <section>
                    <img id={ImgOurStory2} src={ourStory2} alt="our-story-2" />
                  </section>
                </Suspense>
              </div>
            </div>
            <div style={{ flex: 5 }} className={` `}>
              <div className="mx-5">

                <p className={`${fz20} ${aboutContent} ${fontProN} ${fClrDark}`}>TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of what has become a vibrant and viable corporate social responsibility and sustainability industry in Nigeria, and Africa.</p>
                <ActionLink title={"READ FULL STORY"} icon={<div className={downExpect}>&rarr;</div>} />
              </div>
            </div>
          </section>

        </section>
      </section>

      {/* Our Services */}
      <BodyService />

      {/* Our Projects */}
      <BodyProject />

      {/* Partners */}
      <Partners />

      {/* <Fade bottom>
        <section id="pink-shade" className="quote-container">
          <div className="quote px-3">
            <div className="quote-text-container">
              <h3>
                Looking for a better way to transport your staffs to & from the
                office
            </h3>
              <p>Engage Excellent Logistics Fleet Management Service today</p>
              <button>Get a Quote</button>
            </div>
            <div className="quote-image">
              <div className="quote-image-container">
                <img src={fleet} alt="always connected" />
              </div>
            </div>
          </div>
        </section>
      </Fade> */}


    </main>
  </Fragment>
);

export default BodyHome;
