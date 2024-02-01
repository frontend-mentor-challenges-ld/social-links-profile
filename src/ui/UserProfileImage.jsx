import styled from "styled-components";

import { useUser } from "../contexts/UserContext";

const StyledUserProfileImage = styled.div`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2.4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

function UserProfileImage() {
  const { avatar, name } = useUser();

  return (
    <StyledUserProfileImage>
      <img src={avatar} alt={`Image of ${name}`} />
    </StyledUserProfileImage>
  );
}

export default UserProfileImage;
