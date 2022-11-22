import styled from "styled-components";

/**
 * example:
 *
 * const RoundedFullWidthWrapper=styled(FullWidthWrapper)`
 * border-radius:12px;
 * `
 *
 * const SomeComponent=()=>{
 * return <RoundedFullWidthWrapper> some content inside a rounded fullWidth Wrapper</RoundedFullWidthWrapper>
 * }
 *
 */

export const FullWidthWrapper = styled.div`
  width: 100%;
`;
