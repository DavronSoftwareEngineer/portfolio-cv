import React from "react";
import { HomeStyle } from "./style";
import Typed from "typed.js";
import { type } from "@testing-library/user-event/dist/type";

function Home() {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<span>Front-end(Reactjs) developer.</span>'],
      typeSpeed: 80,
      loop: true,
      fadeOut: true,
    });

    return () => {
      typed.destroy();
    };
  }, [])
  return (
    <HomeStyle>
      <div className="wraphom">
        <h4 className="title">Davron Mamatov</h4>
        <p>Im <span ref={el}></span></p>
      </div>
    </HomeStyle>
  );
}

export default Home;
