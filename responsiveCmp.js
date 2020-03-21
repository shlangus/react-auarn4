import React from "react";
import MediaQuery from 'react-responsive'

export const sizes = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 991,
  desktopMin: 992
};

export const Desktop = props => (
  <MediaQuery {...props} minWidth={992} />
);
export const Tablet = props => (
  <MediaQuery
    {...props}
    minWidth={768}
    maxWidth={991}
  />
);
export const Mobile = props => (
  <MediaQuery {...props} maxWidth={767} />
);
export const Default = props => (
  <MediaQuery {...props} minWidth={768} />
);