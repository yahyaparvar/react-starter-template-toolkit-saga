import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  COLUMN_CENTER,
} from "styles/globalStyles";
import CodeIcon from "./icons/code";
import GlobeSvgIcon from "./icons/globe";
import LeafIcon from "./icons/leaf";
import LightIcon from "./icons/light";
import PuzzleSvgIcon from "./icons/puzzle";
import UnplugSvgIcon from "./icons/unplug";
export const Features = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Lightweight"),
      icon: <LightIcon />,
      desc: t(
        "CRA_Template_is_a_boilerplate_with_all_you_need_in_a_project_ensuring_a_lean_and_efficient_solution"
      ),
    },
    {
      title: t("Type_Safe"),
      icon: <UnplugSvgIcon />,
      desc: t(
        "Catch_compile_time_errors_with_ease_and_unlock_strong_typing_benefits"
      ),
    },
    {
      title: t("Tree_Shakable"),
      icon: <LeafIcon />,
      desc: t(
        "Eliminating_unused_code_and_delivering_leaner_bundles_for_lightning_fast_load_times"
      ),
    },
    {
      title: t("Easy_to_Use"),
      icon: <PuzzleSvgIcon />,
      desc: t(
        "Get_started_in_no_time_Explore_comprehensive_documentation_and_rich_examples"
      ),
    },
    {
      title: t("Developer_Friendly"),
      icon: <CodeIcon />,
      desc: t(
        "Simplify_development_with_an_intuitive_and_powerful_file_generation_using_plop_Don_t_repeat_yourself"
      ),
    },
    {
      title: t("Open_Source"),
      icon: <GlobeSvgIcon />,
      desc: t(
        "Join_the_vibrant_community_Collaborate_contribute_and_unlock_endless_possibilities_together."
      ),
    },
  ];
  return (
    <Wrapper>
      <Title>{t("Features")}</Title>
      <FeaturesContainer>
        {data.map((feature) => {
          return (
            <Feature>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.desc}</FeatureDescription>
            </Feature>
          );
        })}
      </FeaturesContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 120px 32px;
  ${COLUMN_CENTER}
  background-color: var(--background-secondary);
`;
const Title = styled.h1`
  font-size: 60px;
  color: var(--title);
  margin: 0;
`;
const Feature = styled.div`
  width: 100%;
  border-radius: 8px;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  background-color: var(--background-color);
  padding: 29px;
  border: 1px solid var(--border);
`;
const FeatureTitle = styled.h3`
  margin: 0;
  color: var(--title);
`;
const FeatureDescription = styled.p``;
const FeaturesContainer = styled.div`
  margin-top: 24px;
  display: grid;
  justify-content: center;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    max-width: 64rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
const FeatureIcon = styled.div`
  margin-bottom: 12px;
`;
