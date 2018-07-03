import React, { Component } from 'react'

const Sidebar =(props)=>{}
  render() {
    return (
      <div className="Sidebar">
        {props.user.displayName}
      </div>
    )
  }


export default Sidebar