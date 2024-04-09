import React, { useState } from "react";

interface LazyImageComponentProps {
  src: string;
  className?: string; // Allow for styling
}

const LazyImageComponent: React.FC<LazyImageComponentProps> = ({
  src,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={""}
      className={`${className ?? ""} ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImageComponent;
