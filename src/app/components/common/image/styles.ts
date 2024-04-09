import styled from "styled-components";
import LazyImageComponent from "./lazyImage";

export const LazyImage = styled(LazyImageComponent).attrs(({ className }) => ({
  className: `styled-lazy-image ${className || ""}`,
}))`
  /* Basic styles */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    animation: fadeIn 0.5s ease-in-out;
    opacity: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
