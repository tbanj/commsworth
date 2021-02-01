import React from 'react'
import { Fragment } from 'react';
import BodyTitle from '../bodyTitle/BodyTitle';
import ActionLink from '../actionLink/ActionLink';
import tree from '../../assets/edit/tree.png';
import testimony from '../../assets/edit/testimony.png';
import fire from '../../assets/edit/fire.png';
import buildingScape from '../../assets/edit/buildings_landscape.png';
import bodyCss from '../Body/bodyhome.module.css';
import blogCss from './blog.module.css';
import actionLinkCss from '../actionLink/actionlink.module.css';




const Blog = () => {
    const { fontAvenir, fontProN, fz20, fClr, trucontactBGLight } = bodyCss;
    const { downExpect } = actionLinkCss;
    const { blogSubTitle, fz36, fz14, distributeDiv } = blogCss;

    return (<Fragment>
        <section className="my-5">
            <BodyTitle content={"BLOG"} />

            <div className="col-md-10 offset-md-1">
                <div className={`row ${trucontactBGLight}`}>
                    <div className="col-md"><img src={tree} alt="tree" /></div>
                    <div className="col-md">
                        <div className={`${distributeDiv} px-4 `}>
                            <h6 className={` ${blogSubTitle} ${fz14} ${fontAvenir}`}>JANUARY 2021</h6>

                            <h1 className={`${fontAvenir} font-weight-bold ${fz36} ${fClr}`}>2020 at a glance: yearly
review</h1>
                            <h5 className={`${fontProN} ${fz20}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</h5>

                            <div>
                                <ActionLink title={"READ MORE"} icon={<div className={downExpect}>&rarr;</div>} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>);
}

export default Blog;