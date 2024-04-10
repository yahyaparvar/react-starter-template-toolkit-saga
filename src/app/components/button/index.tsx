import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { BUTTON, ROW_CENTER } from "styles/globalStyles";

const sizes = {
  small: css`
    padding: 4px 8px;
  `,
  medium: css`
    padding: 8px 16px;
  `,
  large: css`
    padding: 12px 32px;
  `,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: keyof typeof sizes;
}

const StyledButton = styled.button<ButtonProps>`
  ${BUTTON}
  ${ROW_CENTER}
  font-size:16px;
  background-color: var(--button);
  color: var(--button-text);
  border-radius: 8px;
  font-weight: 600;
  ${(props) => sizes[props.size || "medium"]}
  &:hover {
    filter: brightness(1.2);
  }
`;

const Icon = styled.span<{ position: "left" | "right" }>`
  margin-right: ${(props) => (props.position === "left" ? "4px" : "0")};
  margin-left: ${(props) => (props.position === "right" ? "4px" : "0")};
  svg {
    fill: var(--button-text);
    margin-bottom: -4px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton size={size} {...props}>
      {icon && iconPosition === "left" && <Icon position="left">{icon}</Icon>}
      {children}
      {icon && iconPosition === "right" && <Icon position="right">{icon}</Icon>}
    </StyledButton>
  );
};
