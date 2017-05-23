import React from 'react';

const Header = (props)=> {
  return (
    <div className="Header">
      <span>Header</span>
      { props.children }
    </div>
  )
};

export default Header;