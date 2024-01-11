import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
    const buttonStyle ={
        color:props.color,
        fontSize:props.size,
        width:props.width,
        paddingTop:props.paddingTop,
        paddingBottom:props.paddingBottom,
        paddingLeft:props.paddingLeft,
        paddingRight:props.paddingRight,
        backgroundColor:props.bgColor,
        outlineStyle:props.outlineStyle,
        borderStyle:props.borderStyle,
        borderRadius: props.borderRadius,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        cursor: props.cursor
    }
  return (
   <button style={buttonStyle}>
    {props.title}
   </button>
  )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string
}

Button.defaultProps ={
    color:'#0453d1',
    width:'fit-content',
    size:14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    bgColor:'#c0c1c2',
    outlineStyle:'none',
    borderStyle:'none',
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    cursor: 'pointer'
}

export default Button