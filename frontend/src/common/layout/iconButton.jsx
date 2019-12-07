import React from 'react'

export default props => (
    <button className={`btn btn-actions btn-${props.style}`} 
    onClick={props.onClick}
     type={props.type}>
        <i className={`fa fa-${props.icon}`}></i> 
    </button>
)