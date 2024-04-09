import CustomSelect from "app/components/common/dropdown";
import { Themes } from "app/types";
import { memo, useLayoutEffect, useState } from "react";
import { LocalStorageKeys, storage } from "store/storage";
import styled from "styled-components";
import { BUTTON, COLUMN_ALIGN_START__JUSTIFY_START } from "styles/globalStyles";

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

  return (
    <Wrapper>
      <ThemeText>{`${theme.toLocaleUpperCase()} Theme`}</ThemeText>
      <CustomSelect
        defaultValue={theme}
        options={[
          { value: Themes.LIGHT, label: "Audi" },
          { value: Themes.DARK, label: "BMW" },
          { value: Themes.DARK, label: "BMW" },
          { value: Themes.DARK, label: "BMW" },
          { value: Themes.DARK, label: "BMW" },
          { value: Themes.DARK, label: "BMW" },
        ]}
        onChange={(newTheme) => {
          toggleTheme(newTheme);
        }}
      />
    </Wrapper>
  );
};

export const DropdownContent = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 70px;
  width: 100%;
  background-color: var(--night-gray);
  border: 1px solid var(--dark-gray);
  width: 323px; // Ensures a minimum width for content
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); // Adds a subtle shadow
  z-index: 1; // Ensures dropdown content is above other content
  border-radius: 8px; // Rounded corners
  transition: opacity 0.3s ease-in-out;
`;
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

export const DropdownButton = styled.button`
  ${BUTTON}
  border-radius:100%;
  width: 40px;
  height: 40px;
`;

export default memo(ThemeToggler);
