import styled from "styled-components";

import { useUser } from "../contexts/UserContext";

import UserProfileImage from "./UserProfileImage";
import Heading from "./Heading";

const StyledUserProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledUserInfo = styled.div`
  margin-bottom: 2.4rem;
  text-align: center;
`;

const StyledLocation = styled.p`
  color: var(--green);
  font-weight: var(--fw-700);
`;

const StyledTagline = styled.p`
  margin-bottom: 2.4rem;
  color: var(--white);
`;

function UserProfileHeader() {
  const { name, tagline, location } = useUser();

  return (
    <StyledUserProfileHeader>
      <UserProfileImage />
      <StyledUserInfo>
        <Heading>{name}</Heading>
        <StyledLocation>{location}</StyledLocation>
      </StyledUserInfo>
      <StyledTagline>&quot;{tagline}&quot;</StyledTagline>
    </StyledUserProfileHeader>
  );
}

export default UserProfileHeader;
