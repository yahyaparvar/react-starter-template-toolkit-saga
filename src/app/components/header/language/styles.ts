import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
`;

export const DropdownContent = styled.div`
  display: ${(props: { open: boolean }) => (props.open ? "block" : "none")};
  position: absolute;
  top: 30px;
  background-color: var(--background);
  min-width: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const LanguageOption = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;
