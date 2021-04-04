import React from 'react';
import './layout.scoped.scss';
const Default = ({ children })=> {
  return (
    <div className="example">
      layout
      {children}
    </div>
  )
}

export default Default;