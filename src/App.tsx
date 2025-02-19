import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import AppHeader from "./components/layouts/AppHeader";
import AppProviders from "./providers/AppProviders";
import AppContent from "./components/layouts/AppContent";

const AppContainer = styled.div`
  position: relative;
  min-height: 100%;
  height: 100%;
  background-color: #f3f4f6;
`;

function App() {
  return (
    <AppProviders>
      <AppContainer>
        <AppHeader />
        <AppContent>
          <AppRoutes />
        </AppContent>
      </AppContainer>
    </AppProviders>
  );
}

export default App;
