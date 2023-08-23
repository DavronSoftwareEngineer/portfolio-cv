import React from "react";
import { HomeStyle } from "./style";
// import Typed from 'react-typed';

function Home() {
  return (
    <HomeStyle>
      <div className="wraphom">
        <h4 className="title">Davron Mamatov</h4>
        {/* <p>I'm <Typed className="title-typed" loop strings={['Front-end(Reactjs) developer.']} typeSpeed={40} /></p> */}
      </div>
    </HomeStyle>
  );
}

export default Home;
