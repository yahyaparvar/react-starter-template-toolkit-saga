import { Button } from "app/components/button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { COLUMN_CENTER } from "styles/globalStyles";

export const HeroComponent = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>CRA Template</Title>
      <Description>
        {t("A_create_react_app_template_using_redux_saga_toolkit")}
      </Description>
      <Button size="large">Use Template!</Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${COLUMN_CENTER}
  width: 100%;
  gap: 16px;
  height: 500px;
`;
const Title = styled.h1`
  font-size: 70px;
  color: var(--title);
  margin: 0;
`;
const Description = styled.div`
  font-size: 20px;
`;
