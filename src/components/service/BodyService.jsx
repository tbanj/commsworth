import React from 'react';
import { Fragment } from 'react';
import ActionLink from '../actionLink/ActionLink';
import BodyTitle from '../bodyTitle/BodyTitle';
import consultServ from '../../assets/consulting-serv.png';
import imaServ from '../../assets/ima-serv.png';
import engageServ from '../../assets/engage-design.png';
import strategyServ from '../../assets/strategy.png';
import bodyCss from '../Body/bodyhome.module.css';
import actionLinkCss from '../actionLink/actionlink.module.css';
import bodyServCss from './bodyService.module.css'

const { bs, remPadLR, fzC, serviceTitle, fz18, serviceContent, borderRad, flexFloatRight, imgWrapper, innerImg } = bodyServCss;
const { fz20, centerD, fClr, aboutContent, fClrDark, truBlue, fz24, fontProN, fontAvenir } = bodyCss;
const { downExpect } = actionLinkCss;
const BodyService = () => (
    <Fragment>
        <section className={bs}>
            <section className="col-md-10 offset-md-1">
                <section className={`d-flex `}>
                    <BodyTitle content={"OUR SERVICES"} />
                    <div style={{ flex: 7 }} className={`${centerD} ${aboutContent} ${fontProN} ${fClrDark}`}>
                        <p className={` ${fontProN} ${fz20}`} style={{ width: "85%" }}>
                            Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.
                </p>
                    </div>
                </section>

                {/* service columns */}
                <div>
                    <div className="row ">
                        <div className={`col-md-6 my-3`}>
                            <div className={`${truBlue} ${remPadLR} ${borderRad}`}>
                                <div className={imgWrapper}>
                                    <img className={innerImg} src={consultServ} alt="consult- serv" />
                                </div>
                                <div className="p-5">
                                    <h4 className={`text-white ${fz24} ${serviceTitle} ${fontAvenir}`}>Consulting</h4>
                                    <h6 className={`${fz18} ${fzC} ${serviceContent}  ${fontAvenir}`}>
                                        Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.
                            </h6>
                                    <div className={`mt-3 mb-4 ${flexFloatRight}`}>
                                        <ActionLink title={"WORK WITH US"} icon={<div className={downExpect}>&rarr;</div>} />
                                    </div>
                                </div>


                            </div>
                        </div>



                        <div className={`col-md-6 my-3`}>
                            <div className={`${truBlue} ${remPadLR} ${borderRad}`}>
                                <div className={imgWrapper}>
                                    <img className={innerImg} src={imaServ} alt="ima- serv" />
                                </div>
                                <div className="p-5">
                                    <h4 className={`text-white ${fz24} ${serviceTitle} ${fontAvenir}`}>Impact Measurement & Accessment</h4>
                                    <h6 className={`${fz18} ${fzC} ${serviceContent} ${fontAvenir}`}>
                                        At TCSRN, we help decision-makers and policy-makers decide what actions they should or should not take to make society more sustainable, and also ensure that plans and activities makes an optimal contribution to sustainable development.</h6>
                                    <div className={`mt-3 mb-4 ${flexFloatRight}`}>
                                        <ActionLink title={"WORK WITH US"} icon={<div className={downExpect}>&rarr;</div>} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    {/*  Engagement Design &Strategy */}
                    <div className="row ">
                        <div className={`col-md-6 my-3`}>
                            <div className={`${truBlue} ${remPadLR} ${borderRad}`}>
                                <div className={imgWrapper}>
                                    <img className={innerImg} src={engageServ} alt="consult- serv" />
                                </div>
                                <div className="p-5">
                                    <h4 className={`text-white ${fz24} ${serviceTitle} ${fontAvenir}`}>Engagement Design</h4>
                                    <h6 className={`${fz18} ${fzC} ${serviceContent} ${fontAvenir}`}>
                                        Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust. </h6>
                                    <div className={`mt-3 mb-4 ${flexFloatRight}`}>
                                        <ActionLink title={"WORK WITH US"} icon={<div className={downExpect}>&rarr;</div>} />
                                    </div>
                                </div>


                            </div>
                        </div>




                        <div className={`col-md-6 my-3`}>
                            <div className={`${truBlue} ${remPadLR} ${borderRad}`}>
                                <div className={imgWrapper}>
                                    <img className={innerImg} src={strategyServ} alt="ima- serv" />
                                </div>
                                <div className="p-5">
                                    <h4 className={`text-white ${fz24} ${serviceTitle} ${fontAvenir}`}>Strategy</h4>
                                    <h6 className={`${fz18} ${fzC} ${serviceContent} ${fontAvenir}`}>
                                        At TCSRN, we provide service that assist our client to set new agendas and reengineer their business models that boost their chances at a sustainable future in which innovation propels their productivity.</h6>
                                    <div className={`mt-3 mb-4 ${flexFloatRight}`}>
                                        <ActionLink title={"WORK WITH US"} icon={<div className={downExpect}>&rarr;</div>} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </Fragment>
)

export default BodyService;