import styled from "styled-components";
import { COLUMN_CENTER } from "styles/globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${COLUMN_CENTER}
  background-color: var(--background-color);
`;
export const LoadingText = styled.div`
  color: var(--text);
  font-size: 23px;
  font-weight: 800;
`;
export const LoadingImage = styled.img`
  width: 120px;
  margin-bottom: 16px;
  height: 120px;
`;
