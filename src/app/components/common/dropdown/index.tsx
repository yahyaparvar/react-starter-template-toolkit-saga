import React, { useRef, useState } from "react";
import styled from "styled-components";
import { UNSELECTABLE } from "styles/globalStyles";
import { useOnClickOutside } from "usehooks-ts";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: Option[];
  onChange?: (event: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const containerRef = useRef(null);
  const handleItemClick = (item: string | number) => {
    setSelectedValue(item);
    onChange && onChange(item as any);
    setIsActive(false);
  };
  useOnClickOutside(containerRef, () => {
    setIsActive(false);
  });

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownButton onClick={() => setIsActive(!isActive)}>
        {options.find((option) => option.value === selectedValue)?.label ||
          rest.defaultValue}
      </DropdownButton>
      <DropdownContent style={{ display: isActive ? "block" : "none" }}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleItemClick(option.value)}
            className="item"
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin: 0 auto;
  z-index: 10000;
  width: 300px;
  position: relative;

  * {
    z-index: 10;
  }
`;

const DropdownButton = styled.div`
  ${UNSELECTABLE}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--background-color);
  border: 1px solid var(--text);
  border-radius: 5px;
  color: var(--text);
  font-weight: 500;
`;

const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.07);
`;

const DropdownItem = styled.div`
  padding: 10px;
  background: var(--background-color);
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export default Dropdown;
