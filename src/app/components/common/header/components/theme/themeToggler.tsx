import CustomSelect from "app/components/common/dropdown";
import { Themes } from "app/types";
import { memo, useLayoutEffect, useState } from "react";
import { LocalStorageKeys, storage } from "store/storage";
import styled from "styled-components";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("");

  useLayoutEffect(() => {
    const savedTheme = storage.read(LocalStorageKeys.THEME);
    const app = document.querySelector("body");
    if (app) {
      app.classList.add(savedTheme);
    }
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(Themes.DARK);
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    const app = document.querySelector("body");
    if (app) {
      app.classList.remove(theme);
      app.classList.add(newTheme);
    }
    setTheme(newTheme);
    storage.write(LocalStorageKeys.THEME, newTheme);
  };
  const availableThemes = Object.values(Themes).map((themeValue) => ({
    value: themeValue,
    label: themeValue.toUpperCase(),
  }));

  return (
    <Wrapper>
      <ThemeText>{`${theme.toLocaleUpperCase()} Theme`}</ThemeText>
      <CustomSelect
        defaultValue={theme}
        options={availableThemes}
        onChange={(newTheme) => {
          toggleTheme(newTheme);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  color: var(--disabled-text);
`;

const ThemeText = styled.div`
  margin-right: 10px;
`;

export default memo(ThemeToggler);
