import styled from "styled-components";

const StyledUserProfileLink = styled.li`
  background-color: var(--grey);
  color: var(--white);
  list-style: none;
  border-radius: 0.8rem;
  font-weight: var(--fw-700);
  cursor: pointer;

  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  a {
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &:hover {
    background-color: var(--green);
    color: var(--grey);
  }
`;

function UserProfileLink({ social }) {
  const { socialName, socialLink } = social;

  return (
    <StyledUserProfileLink>
      <a href={socialLink} target="_blank" rel="noopener noreferrer">
        {socialName}
      </a>
    </StyledUserProfileLink>
  );
}

export default UserProfileLink;
