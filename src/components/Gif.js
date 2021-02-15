import React from 'react'
import PropTypes from 'prop-types'

const Gif = ({url, alt, height, width}) => {   
    return (
        <>
            <img className="img-responsive" src={url} alt={alt} height={height} width={width}></img>
        </>
    )
}

Gif.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.number
}
export default Gif
