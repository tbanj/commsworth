import React from 'react'
import { Fragment } from 'react';
import BodyTitle from '../bodyTitle/BodyTitle';
import bodyCss from '../Body/bodyhome.module.css';
import partnerCss from './partner.module.css';

const Partners = () => {
    const { trucontactBGLight, fontProN, contentCrl, aboutContent } = bodyCss;
    const { containerPartner, marquee, img1 } = partnerCss;
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
                        <div className={img1}></div>
                        <div className={img1}></div>
                        <div className={img1}></div>
                        <div className={img1}></div>
                        <div className={img1}></div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>);
}

export default Partners;