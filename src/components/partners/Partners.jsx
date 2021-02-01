import React from 'react'
import { Fragment } from 'react';
import BodyTitle from '../bodyTitle/BodyTitle';
import act from '../../assets/edit/act.png';
import chevron from '../../assets/edit/chevron.png';
import dangote from '../../assets/edit/dangote.png';
import fcmb from '../../assets/edit/fcmb.png';
import firstBank from '../../assets/edit/firstBank.png';
import gtb from '../../assets/edit/gtb.png';
import lafarge from '../../assets/edit/lafarge.png';
import nestle from '../../assets/edit/nestle.png';
import testimony from '../../assets/edit/testimony.png';

import bodyCss from '../Body/bodyhome.module.css';
import partnerCss from './partner.module.css';
import ActionLink from '../actionLink/ActionLink';
import ActionLinkCss from '../actionLink/actionlink.module.css';

const Partners = () => {
    const { trucontactBGLight, fontProN, contentCrl, aboutContent, fClrDark, fontAvenir, fz18,
        fz16, fClr, testimonyContent, fz24, fClrLight } = bodyCss;
    const { downExpect } = ActionLinkCss;
    const { containerPartner, marquee, img1, w40, minHeight, imgPartnerAvatar } = partnerCss;
    return (<Fragment>
        <section className={`my-4 ${trucontactBGLight}`}>
            <div className="col-md-10 offset-md-1 my-5">
                <div className="row">
                    <div className="col-md-3"> <BodyTitle content={"OUR PARTNERS"} /></div>
                    <div className="col-md">
                        <p className={`${contentCrl} ${fontProN} ${aboutContent}`}>Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.</p>
                    </div>
                </div>


                <div className={`${containerPartner} mt-4`}>
                    <div className={marquee}>
                        <div className="row my-5">
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={nestle} alt="nestle" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={firstBank} alt="firstBank" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={gtb} alt="gtb" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={lafarge} alt="lafarge" /></div></div>
                        </div>
                        <div className="row">
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={act} alt="act" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={chevron} alt="chevron" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={dangote} alt="dangote" /></div></div>
                            <div className="p-3 col-md"><div className={`bg-white text-center pt-4 ${minHeight}`}><img className={w40} src={fcmb} alt="fcmb" /></div></div>

                        </div>
                    </div>
                </div>


                {/* Testimonials */}
                <div className="row my-5">
                    <div className={`col-md-4 `}><img src={testimony} id={imgPartnerAvatar} alt="testimony" />
                    </div>
                    <div className="col-md">
                        <h4 className={`${fontAvenir} ${fClrDark} ${testimonyContent} ${fz24}`}>{`"Working with TruCSR was the best decision i made for my business, most people underestimate the importance of Social responsibilty in this country, i’m glad we consulted TruCSR"`}</h4>
                        <h6 className={` ${fontAvenir} mt-5 ${fClr} ${fz18} font-weight-bold`}>Mr Kelechi Onuacho</h6>
                        <p className={`${fontAvenir} ${fClrLight} ${fz16}`}>CEO, Nestle</p>
                        <div className="float-right"><ActionLink title={"SEE MORE TESTIMONIALS"} icon={<div className={downExpect}>&rarr;</div>} /></div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>);
}

export default Partners;