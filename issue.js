import React from "react";
import { Mobile, Desktop, Tablet, Default } from "./responsive";

const Leaking = ({ children }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    // do smth with ref
    console.log(ref.current.clientWidth);
  });

  return <div ref={ref}>{children}</div>
}

const ResponsiveChild = () => {
  return (
    <div>
      <Desktop>
        <Leaking>Desktop</Leaking>
      </Desktop>
      <Mobile>
        <Leaking>Mobile</Leaking>
      </Mobile>
      <Tablet>
        <Leaking>Tablet</Leaking>
      </Tablet>
    </div>
  );
};

const Wrapper = ({ children }) => {
  return <div>{children}</div>;
};

export const Issue = () => {
  return (
    <div>
      <Mobile>
        <ResponsiveChild />
      </Mobile>
      <Default>
        <ResponsiveChild />
      </Default>
    </div>
  );
};
