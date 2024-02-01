import styled from "styled-components";

import UserProfileHeader from "./UserProfileHeader";
import UserProfileLinks from "./UserProfileLinks";

const StyledUserProfileCard = styled.div``;

function UserProfileCard() {
  return (
    <StyledUserProfileCard>
      <UserProfileHeader />
      <UserProfileLinks />
    </StyledUserProfileCard>
  );
}

export default UserProfileCard;
