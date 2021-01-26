import React from 'react';
import PropTypes from 'prop-types';
import actionLinkCss from './actionlink.module.css';

const { linkCaption, caption } = actionLinkCss;
const ActionLink = ({ title, icon }) => (
    <div className="d-flex">
        <a aria-current="page" className={`${caption} ${linkCaption}`} href="/" >{title}</a>
        {icon}
    </div>
)

ActionLink.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
};
export default ActionLink;