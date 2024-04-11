import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "app/components/button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { COLUMN_CENTER } from "styles/globalStyles";
export const HeroComponent = () => {
  const { t } = useTranslation();
  const handleButtonOnClick = () => {
    window.open(
      "https://github.com/new?template_name=template-toolkit-saga&template_owner=yahyaparvar",
      "_blank"
    );
  };
  return (
    <Wrapper>
      <Title>{t("CRA_Template")}</Title>
      <Description>
        {t("A_create_react_app_template_using_redux_saga_toolkit")}
      </Description>
      <Button
        size="large"
        icon={<ChevronRightIcon />}
        iconPosition="right"
        onClick={handleButtonOnClick}
      >
        {t("Use_Template")}
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${COLUMN_CENTER}
  width: 100%;
  gap: 16px;
  padding: 130px 0;
  @media screen and (max-width: 500px) {
    padding: 30px;
    padding-top: 100px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  color: var(--title);
  margin: 0;
  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
`;
const Description = styled.div`
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
