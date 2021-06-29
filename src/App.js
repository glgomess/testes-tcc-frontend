import {
  Search20,
  Notification20,
  AppSwitcher20,
  Fade16,
} from "@carbon/icons-react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderMenuItem,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import TestComponent from "./components/TestComponent";
function App() {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Plataforma">
                Teste Inicial
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Home</HeaderMenuItem>
                <HeaderMenuItem href="#">Artigos</HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                  tooltipAlignment="end"
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
          </>
        )}
      />
      <Content>
        <TestComponent />
      </Content>
    </>
  );
}

export default App;
