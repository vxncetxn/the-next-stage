import { forwardRef } from "react";

const PlainAnchorComp = forwardRef(({ href, children, ...others }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      {...others}
    >
      {children}
    </a>
  );
});

export default PlainAnchorComp;
