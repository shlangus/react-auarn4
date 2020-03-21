import React from "react";
import { Mobile, Default, Desktop, Tablet } from "./responsiveCmp";

const Leaking = ({ children }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    // do smth with ref
    console.log(ref.current && ref.current.clientWidth);
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

export const IssueCmp = () => {
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
