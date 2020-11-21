import PropTypes from 'prop-types'
import React from "react";

const PageTitle = ({title}) => {
    return (
        <div className="page-title mb-5">
            <h1>{title}</h1>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
};


export default PageTitle