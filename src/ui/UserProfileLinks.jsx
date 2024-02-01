import styled from "styled-components";
import { useUser } from "../contexts/UserContext";

import UserProfileLink from "./UserProfileLink";

const StyledUserProfileLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function UserProfileLinks() {
  const { socials } = useUser();

  return (
    <StyledUserProfileLinks>
      {socials.map(social => (
        <UserProfileLink social={social} key={social.socialName} />
      ))}
    </StyledUserProfileLinks>
  );
}

export default UserProfileLinks;
