import React, { Component, Fragment, Suspense } from 'react';
import $ from "jquery";
import BodyTitle from '../bodyTitle/BodyTitle';
import './bodyproject.css';
import { mousefile } from './mousefile';
import maskUp from '../../assets/mask-up.png';
import saveChild from '../../assets/save-child.png';
import sera from '../../assets/sera.png';
import bodyPoject from './bodypoject.module.css';
class BodyPoject extends Component {

    render() {
        const { slidepro, imgSlide1, imgSlide2, imgSlide3, imgSlide4, contentPlacement,
            projectTitle, contentPlacePro, posContentPlacePro } = bodyPoject;
        return (
            <Fragment>
                <BodyTitle content={"OUR PROJECTS"} />

                {/* sample code */}
                <div className="my-doos my-4" onLoad={() => mousefile()}>
                    <div id="parent">
                        <div id="propertyThumbnails">

                            <div id="slide1" className="eachSlide mr-4">
                                <div id="imgslide-overlay1" className="mr-4" >
                                    <div className={`text-white   ${contentPlacement}`} id="text1">
                                        <div className="w-100">
                                            <h1 className={`text-center text-wrap ${projectTitle}`}>
                                                Mask up
                                                Initiaitve
                                                by Nestle
                                                </h1>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div class="loader"></div>}>

                                    <img src={maskUp} alt="mask-up" className={` ${slidepro} mr-4`} />

                                </Suspense>
                            </div>
                            <div id="slide2" className="eachSlide">
                                <div id="imgslide-overlay2" >
                                    <div className={`text-white   ${contentPlacePro}`} id="text1">
                                        <div className={`w-100 ${posContentPlacePro}`}>
                                            <h1 className={`text-center text-wrap ${projectTitle}`}>
                                                dddddddiiiiiiiiiiiiiiiiiiiiiiiijjjjjiiiiiiiiiiiiiiiiiiiiiiiijjjjj
                                                </h1>
                                        </div>
                                    </div>

                                </div>

                                <Suspense fallback={<div class="loader"></div>}>

                                    <img src={saveChild} alt="save-child" className={` mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>
                            <div id="slide3" className="eachSlide mr-4">
                                <div id="imgslide-overlay3" className="mr-4">
                                    <div className={`text-white   ${contentPlacement}`} id="text1">
                                        <div className="w-100">
                                            <h1 className={`text-center text-wrap ${projectTitle}`}>
                                                Mask up
                                                Initiaitve
                                                by Nestle
                                                </h1>
                                        </div>
                                    </div>
                                </div>

                                <Suspense fallback={<div class="loader"></div>}>

                                    <img src={sera} alt="sera" className={`mr-5 ${slidepro}`} />

                                </Suspense>
                            </div>
                            <div id="slide4" className="eachSlide ">
                                <div id="imgslide-overlay4">
                                    <div className={`text-white   ${contentPlacement}`} id="text1">
                                        <div className="w-100">
                                            <h1 className={`text-center text-wrap ${projectTitle}`}>
                                                Mask up
                                                Initiaitve
                                                by Nestle
                                                </h1>
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

            </Fragment>
        );
    }
}

export default BodyPoject;