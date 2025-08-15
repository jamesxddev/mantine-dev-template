import { useState } from 'react';
import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarNested } from './components/NavBar/NavbarNested';


import Overview from './pages/overview/Overview';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/Header/Header';


export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Router>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <Header />

          <AppShell.Navbar>
            <NavbarNested />
          </AppShell.Navbar>

          <AppShell.Main>
            <Routes>
            <Route path="/"  />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}