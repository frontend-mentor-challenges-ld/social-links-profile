import styled from "styled-components";

import UserProfileHeader from "./UserProfileHeader";
import UserProfileLinks from "./UserProfileLinks";

const StyledUserProfileCard = styled.div`
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border-radius: 1.2rem;
`;

function UserProfileCard() {
  return (
    <StyledUserProfileCard>
      <UserProfileHeader />
      <UserProfileLinks />
    </StyledUserProfileCard>
  );
}

export default UserProfileCard;
