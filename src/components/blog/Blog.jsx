import React from 'react'
import { Fragment } from 'react';
import BodyTitle from '../bodyTitle/BodyTitle';
import ActionLink from '../actionLink/ActionLink';
import tree from '../../assets/edit/tree.png';
import testimony from '../../assets/edit/testimony.png';
import rightArrow from '../../assets/right-arrow_g_n.svg';

import fire from '../../assets/edit/fire.png';
import buildingScape from '../../assets/edit/buildings_landscape.png';
import bodyCss from '../Body/bodyhome.module.css';
import blogCss from './blog.module.css';
import actionLinkCss from '../actionLink/actionlink.module.css';




const Blog = () => {
    const { fontAvenir, fontProN, fz20, fClr, trucontactBGLight } = bodyCss;
    const { downExpect } = actionLinkCss;
    const { blogSubTitle, fz36, fz14, distributeDiv, posBlogTitle, arrowLogo, arrowParen,
        parentRead } = blogCss;

    return (<Fragment>
        <section className="my-5">
            <div className="my-5">
                <BodyTitle content={"BLOG"} />
            </div>

            <div className="col-md-10 offset-md-1  mb-5">
                <div className={`row ${trucontactBGLight}`}>
                    <div className="col-md"><img src={tree} alt="tree" /></div>
                    <div className="col-md">
                        <div className={`${distributeDiv} px-4 `}>
                            <h6 className={` ${blogSubTitle} ${posBlogTitle} ${fz14} ${fontAvenir} mt-4`}>JANUARY 2021</h6>

                            <div>
                                <h1 className={`${fontAvenir} font-weight-bold ${fz36} ${fClr}`}>2020 at a glance: yearly review </h1>
                                <h5 className={`${fontProN} ${fz20} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</h5>

                            </div>
                            <div className={parentRead}>

                                <div className=""><ActionLink title={"READ MORE"} icon={<div className={`${arrowParen} ${downExpect}`}>
                                    <img className={arrowLogo} src={rightArrow} alt="right-arrow" />
                                </div>} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-10 offset-md-1  mb-5">
                <div className={`row ${trucontactBGLight}`}>
                    <div className="col-md"><img src={fire} alt="fire" /></div>
                    <div className="col-md">
                        <div className={`${distributeDiv} px-4 `}>
                            <h6 className={` ${blogSubTitle} ${posBlogTitle} ${fz14} ${fontAvenir} mt-4`}>DECEMBER 2020</h6>

                            <div>
                                <h1 className={`${fontAvenir} font-weight-bold ${fz36} ${fClr}`}>Q3 at a glance: quarterly
                                review</h1>
                                <h5 className={`${fontProN} ${fz20} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</h5>

                            </div>
                            <div className={parentRead}>

                                <div className=""><ActionLink title={"READ MORE"} icon={<div className={`${arrowParen} ${downExpect}`}>
                                    <img className={arrowLogo} src={rightArrow} alt="right-arrow" />
                                </div>} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-10 offset-md-1  mb-5">
                <div className={`row ${trucontactBGLight}`}>
                    <div className="col-md"><img src={buildingScape} alt="buildingScape" /></div>
                    <div className="col-md">
                        <div className={`${distributeDiv} px-4 `}>
                            <h6 className={` ${blogSubTitle} ${posBlogTitle} ${fz14} ${fontAvenir} mt-4`}>SEPTEMBER 2020</h6>

                            <div>
                                <h1 className={`${fontAvenir} font-weight-bold ${fz36} ${fClr}`}>Q3 at a glance: quarterly
                                review
review</h1>
                                <h5 className={`${fontProN} ${fz20} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</h5>

                            </div>
                            <div className={parentRead}>

                                <div className=""><ActionLink title={"READ MORE"} icon={<div className={`${arrowParen} ${downExpect}`}>
                                    <img className={arrowLogo} src={rightArrow} alt="right-arrow" />
                                </div>} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment >);
}

export default Blog;