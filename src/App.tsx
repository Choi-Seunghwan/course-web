import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import AppHeader from "./components/layouts/AppHeader";
import AppProviders from "./providers/AppProviders";

const AppContainer = styled.div`
  min-height: 100%;
  background-color: #f3f4f6;
  display: relative;
`;

function App() {
  return (
    <AppProviders>
      <AppContainer>
        <AppHeader />
        <AppRoutes />
      </AppContainer>
    </AppProviders>
  );
}

export default App;
