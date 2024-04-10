import { LazyImage } from "app/components/image/styles";
import styled from "styled-components";

export const Logo = () => {
  return <LogoImg src="https://svgshare.com/i/15C4.svg"></LogoImg>;
};
const LogoImg = styled(LazyImage)`
  width: 52px;
`;
