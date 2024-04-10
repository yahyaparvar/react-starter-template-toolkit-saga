/**
 *
 * AboutMe
 *
 */

import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { LazyImage } from "app/components/image/styles";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import styled from "styled-components";
import {
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
      <Title>About Me</Title>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rerum
          aliquid nemo non, fugiat voluptate modi distinctio debitis saepe
          repellendus ab tempore a, blanditiis necessitatibus est dignissimos
          voluptatum, voluptatibus labore?
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
`;
const Profile = styled.div`
  max-width: 320px;
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
`;
const Description = styled.div`
  flex: 1;
  line-height: 30px;
  padding-left: 60px;
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
