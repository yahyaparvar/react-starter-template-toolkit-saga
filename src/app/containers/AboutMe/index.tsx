/**
 *
 * AboutMe
 *
 */

import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { LazyImage } from "app/components/image/styles";
import { useTranslation } from "react-i18next";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import styled from "styled-components";
import {
  COLUMN_CENTER,
  COLUMN_JUSTIFY_START__ALIGN_CENTER,
  ROW_ALIGN_START__JUSTIFY_CENTER,
  ROW_CENTER,
} from "styles/globalStyles";
import GithubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedIn";
import { aboutMeSaga } from "./saga";
import { AboutMeselectors } from "./selectors";
import { AboutMeReducer, sliceKey } from "./slice";

interface Props {}

export function AboutMe(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: AboutMeReducer });
  useInjectSaga({ key: sliceKey, saga: aboutMeSaga });
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const aboutMe = useSelector(AboutMeselectors.root);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Helmet>
        <title>AboutMe</title>
        <meta name="description" content="Description of AboutMe" />
      </Helmet>
      <Title>{t("About_Me")}</Title>
      <Info>
        <Profile>
          <ProfileImg src="https://i.ibb.co/3YwJdwk/avatar.png" />
          <ProfileName>Yaya Parvar</ProfileName>
          <ProfileDetail>Full Stack & Web3 Developer</ProfileDetail>
          <ProfileContactIcons>
            <IconAnchor href="https://github.com/yahyaparvar" target="_blank">
              <GithubIcon />
            </IconAnchor>
            <IconAnchor
              href="https://www.linkedin.com/in/yahya-parvar-22b6591ba/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconAnchor>
          </ProfileContactIcons>
        </Profile>
        <Description>
          {t(
            "I_m_Yahya_Parvar_A_self_motivated_FullStack_developer_since_2017_I_have_a_Associate_Degree_in_Computer_Science__I_started_my_professional_journey_when_I_was_15__with_a_start_up_which_turned_out_to_be_one_of_the_biggest_e_commerce_companies_in_iran__malltina_com_You_can_get_more_info_about_my_worke_in_LinkedIn_or_GitHub"
          )}
        </Description>
      </Info>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 52px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  margin-bottom: 32px;
  font-weight: 600;
  color: var(--title);
`;
const Info = styled.div`
  width: 100%;
  padding: 32px 0;
  ${ROW_ALIGN_START__JUSTIFY_CENTER}
  border-top:1px solid var(--border);
  @media screen and (max-width: 610px) {
    ${COLUMN_CENTER}
  }
`;
const Profile = styled.div`
  max-width: 320px;
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
`;
const Description = styled.div`
  flex: 1;
  line-height: 30px;
  padding: 0 60px;
  @media screen and (max-width: 610px) {
    padding: 0 0px;
    margin-top: 32px;
  }
`;
const ProfileImg = styled(LazyImage)`
  width: 192px;
  height: 192px;
  border-radius: 100%;
`;
const ProfileName = styled.div`
  font-size: 24px;
  color: var(--title);
  font-weight: 600;
  padding: 16px 0 8px;
`;
const ProfileDetail = styled.div``;
const ProfileContactIcons = styled.div`
  ${ROW_CENTER}
  margin-top:20px;
  gap: 8px;
`;
const IconAnchor = styled.a`
  width: 35px;
  height: 35px;
`;
