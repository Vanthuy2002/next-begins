import React from 'react';

type HeadingPropsCustom = Extract<
  keyof JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
>;

type TypographyProps = {
  children: React.ReactNode;
  as?: HeadingPropsCustom;
} & JSX.IntrinsicElements[HeadingPropsCustom];

const Typography = ({ children, as = 'p', ...rest }: TypographyProps) => {
  return React.createElement(as, { ...rest }, children);
};

export { Typography };
