import styled from "styled-components";
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
  UNSELECTABLE,
} from "styles/globalStyles";
import { LanguageSwitcher } from "./language";
import { Logo } from "./logo";
import ThemeToggler from "./theme/themeToggler";

export const Header = () => {
  return (
    <Wrapper>
      <LinkAndLogo>
        <Logo />
        <NavLink>About me</NavLink>
      </LinkAndLogo>
      <LanguageAndTheme>
        <ThemeToggler />
        <LanguageSwitcher />
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