import { useState } from 'react';
import { AppShell, Group, Menu, UnstyledButton, Text, Avatar } from "@mantine/core";
import classes from './Header.module.css';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';


import { Logo } from '../../assets/images/Logo.tsx';
import cx from 'clsx';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export function Header() {
    const [userMenuOpened, setUserMenuOpened] = useState(false);


    return (
        <AppShell.Header>
            <Group justify="space-between">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Logo style={{ width: 120, paddingTop: 12, paddingLeft: 10 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group gap={7}>
                      <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                      <Text fw={500} size="sm" lh={1} mr={3}>
                        {user.name}
                      </Text>
                      <IconChevronDown size={12} stroke={1.5} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Settings</Menu.Label>
                  <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                    Account settings
                  </Menu.Item>
                  <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                    Change account
                  </Menu.Item>
                  <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
                    Pause subscription
                  </Menu.Item>
                  <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                    Delete account
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
              
            </Group>
            
          </AppShell.Header>
    );

}

export default Header;