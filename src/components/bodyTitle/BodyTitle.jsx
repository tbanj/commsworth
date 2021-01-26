import React from 'react';
import PropTypes from 'prop-types';
import bodyTitle from './bodytitle.module.css';
import bodyHome from '../Body/bodyhome.module.css';


const { fz20, fClr, centerD, about, truBlue, fontAvenir } = bodyHome;
const { abtDash } = bodyTitle;
const BodyTitle = ({ content }) => (
    <div className="">
        <div className={centerD}>
            <div id={abtDash} className={truBlue}></div>
            <div className={`ml-4 ${fz20} ${fClr} ${about} ${fontAvenir}`}>{content}</div>
        </div>

    </div>)


BodyTitle.propTypes = {
    content: PropTypes.string.isRequired,
};
export default BodyTitle;
