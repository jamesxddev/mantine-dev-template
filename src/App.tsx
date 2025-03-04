import "@mantine/core/styles.css";
import { AppShell, Burger, Group, MantineProvider } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import classes from './components/NavBar/DeckedSideBar.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarNested } from './components/NavBar/NavbarNested';
import { Logo } from './components/NavBar/Logo';

import Overview from './pages/overview/Overview';
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

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
          <AppShell.Header>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div className={classes.header}>
              <Group justify="space-between">
                <Logo style={{ width: 120 }} />
              </Group>
            </div>
          </AppShell.Header>

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