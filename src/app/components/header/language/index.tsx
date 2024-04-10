import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };
  useOnClickOutside(containerRef, () => {
    setDropdownOpen(false);
  });

  return (
    <LanguageSwitcherContainer ref={containerRef}>
      <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
        {i18n.language === "en" ? "English" : "German"}
      </DropdownButton>
      <DropdownContent open={dropdownOpen}>
        <LanguageOption onClick={() => changeLanguage("en")}>
          English
        </LanguageOption>
        <LanguageOption onClick={() => changeLanguage("de")}>
          German
        </LanguageOption>
      </DropdownContent>
    </LanguageSwitcherContainer>
  );
};
const LanguageSwitcherContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
`;

const DropdownContent = styled.div`
  display: ${(props: { open: boolean }) => (props.open ? "block" : "none")};
  position: absolute;
  top: 30px;
  background-color: var(--background);
  min-width: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const LanguageOption = styled.button`
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
