import history from "app/router/history";
import { AppPages } from "app/types";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
  UNSELECTABLE,
} from "styles/globalStyles";
import GitHubIcon from "./github";
import { LanguageSwitcher } from "./language";
import { Logo } from "./logo";
import ThemeToggler from "./theme/themeToggler";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <LinkAndLogo>
        <LogoLink
          onClick={() => {
            history.push(AppPages.RootPage);
          }}
        >
          <Logo />
        </LogoLink>
        <NavLink
          onClick={() => {
            history.push(AppPages.AboutMe);
          }}
        >
          {t("About_me")}
        </NavLink>
      </LinkAndLogo>
      <LanguageAndTheme>
        <ThemeToggler />
        <LanguageSwitcher />
        <GithubLink
          target="_blank"
          href="https://github.com/yahyaparvar/template-toolkit-saga"
        >
          <GitHubIcon />
        </GithubLink>
      </LanguageAndTheme>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  ${ROW_ALIGN_CENTER__SPACE_B}
  padding:0 30px;
  height: 100px;
`;
const LanguageAndTheme = styled.div`
  ${ROW_CENTER}
`;
const LinkAndLogo = styled.div`
  ${ROW_CENTER}
`;
const NavLink = styled.div`
  ${UNSELECTABLE}
  margin:0 24px;
  text-decoration: underline;
  cursor: pointer;
  color: var(text);
`;
const GithubLink = styled.a`
  margin: 0 8px;
`;
const LogoLink = styled.div`
  cursor: pointer;
  ${UNSELECTABLE}
`;
