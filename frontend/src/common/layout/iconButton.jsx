import React from 'react'

export default props => (
    <button className={`btn btn-actions btn-${props.style}`} onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </button>
)