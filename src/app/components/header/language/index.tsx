import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "usehooks-ts";
import {
  DropdownButton,
  DropdownContent,
  LanguageOption,
  LanguageSwitcherContainer,
} from "./styles";

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
