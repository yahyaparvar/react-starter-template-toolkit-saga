import { LanguageSwitcher } from "./language";
import ThemeToggler from "./theme/themeToggler";
import { Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <ThemeToggler />
      <LanguageSwitcher />
    </Wrapper>
  );
};
