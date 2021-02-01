import React, { Component, Fragment, Suspense } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import BodyTitle from '../bodyTitle/BodyTitle';
import './bodyproject.css';
import { mousefile } from './mousefile';
import maskUp from '../../assets/mask-up.png';
import saveChild from '../../assets/save-child.png';
import sera from '../../assets/sera.png';
import rightArrow from '../../assets/right-arrow.svg';
import bodyPoject from './bodypoject.module.css';
import indexCss from '../../assets/css/index.module.css';
class BodyPoject extends Component {

    render() {
        const { slidepro, imgSlide1, imgSlide2, imgSlide3, imgSlide4, contentPlacement,
            projectTitle, contentPlacePro, posContentPlacePro, projectContent, fl1, mobileProject,
            bigscreenProject, mobileMiniProject, mobileMiniBG } = bodyPoject;
        const { remPadLR, nvbtn } = indexCss;
        return (
            <Fragment>
                <BodyTitle content={"OUR PROJECTS"} />

                {/* sample code */}
                <div className={`my-doos my-4 ${bigscreenProject}`} onLoad={() => mousefile()}>
                    <div id="parent">
                        <div id="propertyThumbnails">

                            <div id="slide1" className={`eachSlide mr-4 `}>
                                <div id="imgslide-overlay1" className="mr-4" >

                                    <div className={`text-white   ${contentPlacePro}`} id="text1">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    Mask up
                                                    Initiaitve
                                                    by Nestle
                                                </h1>

                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={maskUp} alt="mask-up" className={` ${slidepro} mr-4`} />

                                </Suspense>
                            </div>
                            <div id="slide2" className={`eachSlide `}>
                                <div id="imgslide-overlay2" >
                                    <div className={`text-white   ${contentPlacePro}`} id="text2">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    Save the Children initiative powered by Chevron
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={saveChild} alt="save-child" className={` mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>
                            <div id="slide3" className={`eachSlide mr-4 `}>
                                <div id="imgslide-overlay3" className="mr-4">
                                    <div className={`text-white   ${contentPlacePro}`} id="text3">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    14th Edition of The SERAS CSR Awards.
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={sera} alt="sera" className={`mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>
                            <div id="slide4" className={`eachSlide `} >
                                <div id="imgslide-overlay4">
                                    <div className={`text-white   ${contentPlacePro}`} id="text4">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle} `}>
                                                    Mask up Initiaitve by Nestle
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="text-white float-right">mmmmmmmmmmmmmm</div> */}
                                {/* <img src={sera} alt="sera" className={`${slidepro}`} /> */}
                            </div>
                            {/* <img src={maskUp} alt="mask-up" className={`mr-4 ${slidepro}`} />
                            <img src={saveChild} alt="save-child" className={` mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`${slidepro}`} /> */}
                            {/* imgslide-overlay */}
                            {/* rgba(0, 0, 0, 0.5); */}
                            {/* <img src="http://placehold.it/1000x200/ff3c41/222222?text=wanne+gan+ons+braai+?" /> */}
                        </div>
                    </div>
                </div>


                {/* mobileProjectProject display */}
                <div className={`my-doos my-4 ${mobileProject} `} onLoad={() => mousefile()}>
                    <div id="parent">
                        <div id="propertyThumbnails">

                            <div id="slide1" className={`eachSlide mr-4 `}>
                                <div id="imgslide-overlay1" className="mr-4" >

                                    <div className={`text-white   ${contentPlacePro}`} id="text1">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    Mask up
                                                    Initiaitve
                                                    by Nestle
                                                </h1>

                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={maskUp} alt="mask-up" className={` ${slidepro} mr-4`} />

                                </Suspense>
                            </div>
                            <div id="slide2" className={`eachSlide `}>
                                <div id="imgslide-overlay2" >
                                    <div className={`text-white   ${contentPlacePro}`} id="text2">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    Save the Children initiative powered by Chevron
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={saveChild} alt="save-child" className={` mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>


                            <div id="slide3" className={`eachSlide mr-4 `}>
                                <div id="imgslide-overlay3" className="mr-4">
                                    <div className={`text-white   ${contentPlacePro}`} id="text3">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle}`}>
                                                    14th Edition of The SERAS CSR Awards.
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Suspense fallback={<div className="loader"></div>}>

                                    <img src={sera} alt="sera" className={`mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>
                            <div id="slide4" className={`eachSlide `} >
                                <div id="imgslide-overlay4">
                                    <div className={`text-white   ${contentPlacePro}`} id="text4">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <div className={`col-md-10 offset-md-1 ${remPadLR}`}>
                                                <h1 className={`text-wrap ${projectTitle} `}>
                                                    Mask up Initiaitve by Nestle
                                                </h1>
                                                <h4 className={`${projectContent} text-wrap text-white pt-3`}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="text-white float-right">mmmmmmmmmmmmmm</div> */}
                                {/* <img src={sera} alt="sera" className={`${slidepro}`} /> */}
                            </div>

                            {/* <img src={maskUp} alt="mask-up" className={`mr-4 ${slidepro}`} />
                            <img src={saveChild} alt="save-child" className={` mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`${slidepro}`} /> */}
                            {/* imgslide-overlay */}
                            {/* rgba(0, 0, 0, 0.5); */}
                            {/* <img src="http://placehold.it/1000x200/ff3c41/222222?text=wanne+gan+ons+braai+?" /> */}
                        </div>
                    </div>
                </div>


                <div className={`my-doos my-4 ${mobileMiniProject} `} onLoad={() => mousefile()}>
                    <div id="parent">
                        <div id="propertyThumbnails">
                            <div className={`col-md ${mobileMiniBG}`} ><h1 className={`text-wrap ${projectTitle} pt-5`}>
                                Save the Children initiative powered by Chevron
                                                </h1>
                                <h2 className={`${projectContent} text-wrap text-white pt-3`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h2></div>
                            <div className={`col-md ${mobileMiniBG}`}><h1 className={`text-wrap ${projectTitle} pt-5`}>
                                Save the Children initiative powered by Chevron
                                                </h1>
                                <h2 className={`${projectContent} text-wrap text-white pt-3`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h2></div>
                            <div className={`col-md ${mobileMiniBG}`}><h1 className={`text-wrap ${projectTitle} pt-5`}>
                                Save the Children initiative powered by Chevron
                                                </h1>
                                <h2 className={`${projectContent} text-wrap text-white pt-3`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h2></div>
                            <div className={`col-md ${mobileMiniBG}`}><h1 className={`text-wrap ${projectTitle} pt-5`}>
                                Save the Children initiative powered by Chevron
                                                </h1>
                                <h2 className={`${projectContent} text-wrap text-white pt-3`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
                                                </h2></div>
                            {/* <img src={maskUp} alt="mask-up" className={`mr-4 ${slidepro}`} />
                            <img src={saveChild} alt="save-child" className={` mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`mr-4 ${slidepro}`} />
                            <img src={sera} alt="sera" className={`${slidepro}`} /> */}
                            {/* imgslide-overlay */}
                            {/* rgba(0, 0, 0, 0.5); */}
                            {/* <img src="http://placehold.it/1000x200/ff3c41/222222?text=wanne+gan+ons+braai+?" /> */}
                        </div>
                    </div>
                </div>


                <div className="clearfix"></div>
                {/* <div className="text-center">
                    <a className="learn" href="!#">Learn more <img src={rightArrow} alt="right-arrow" /></a>
                </div> */}
                <div className="text-center mt-5">
                    <Link exact to="/projects" className={` ${nvbtn} btn btn-success btnProjects`}> VIEW ALL PROJECTS
                        <div className="arrowParent">
                            <img className="arrowLogo" src={rightArrow} alt="right-arrow" />
                        </div>
                    </Link>
                </div>


            </Fragment>
        );
    }
}

export default BodyPoject;