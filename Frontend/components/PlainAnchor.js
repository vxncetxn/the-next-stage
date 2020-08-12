const PlainAnchorComp = ({ href, children, ...others }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" {...others}>
      {children}
    </a>
  );
};

export default PlainAnchorComp;
