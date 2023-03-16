import React from 'react';
import "./wrapper.scss";

function Wrapper({children}: { children: React.ReactNode }) {
  return (
    <div id="wrapper">{children}</div>
  );
}

export default Wrapper;