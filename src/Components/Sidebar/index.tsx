import React, { useState } from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import classnames from 'classnames';
import './styles.css';

//{ value: boolean, onChange }
// 
function Sidebar({ children } :IProps) {
  const [state, setState] = useState({ open: true });
  const sidebarClassnames = classnames({
    sidebarCmpt: true,
    expanded: state.open
  });
  function handleToggle() {
    setState({ ...state, open: !state.open }) //?
  }
  return (
    <section className={sidebarClassnames}>
      <div className="content">
        {children}
      </div>
      <div className="toggle" onClick={() => handleToggle()}>
        <KeyboardArrowLeft />
      </div>
    </section>
  )
}

interface IProps {
  children: any
}

export default Sidebar;