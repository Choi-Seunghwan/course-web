import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import AppHeader from "./components/layouts/AppHeader";
import AppProviders from "./providers/AppProviders";
import AppContent from "./components/layouts/AppContent";
import AppBottom from "./components/layouts/AppBottom";

const AppContainer = styled.div`
  position: relative;
  min-height: 100%;
  height: 100%;
  background-color: #f3f4f6;
  overflow: auto;
`;

const MobileMode = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppProviders>
      <AppContainer>
        <MobileMode>
          <AppHeader />
          <AppContent>
            <AppRoutes />
          </AppContent>
          <AppBottom />
        </MobileMode>
      </AppContainer>
    </AppProviders>
  );
}

export default App;
