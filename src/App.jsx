import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

import UserProfileCard from "./ui/UserProfileCard";
import Attribution from "./ui/Attribution";
import { UserProvider } from "./contexts/UserContext";

const StyledAppLayout = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledAppLayout>
      <GlobalStyles />
      <UserProvider>
        <UserProfileCard />
      </UserProvider>

      {/* <Attribution /> */}
    </StyledAppLayout>
  );
}

export default App;
