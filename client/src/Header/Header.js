import React from 'react';
import './Header.css';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import { Button, Burger, Group, Drawer, ScrollArea, Divider, UnstyledButton,Center, Box, Collapse } from '@mantine/core';
import JBDM from  '../assets/javier.png';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

const Header = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    return <div><div className='headermain'>
            <div className='leftsidediv'>
            <img className='setimage' height={30} src={JBDM}></img>
            <a className='leftside'>Gabriel </a>
            </div>
            <Group className='fouritems' visibleFrom="sm">
                <Link to="/" className='item'>Home</Link>
                <Link to='/features' className='item'>Features</Link>
                <Link to='/about' className='item'>About</Link>
                <Link to='/links' className='item'>Links</Link>
            </Group>
            <Group className='rightside' visibleFrom="sm">
                <Button variant='default'>Login</Button>
                <Button>Sign up</Button>    
            </Group>
            <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="Toggle navigation"
            mr={'20px'}
          />
          </div>
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm"/>
                <Group className='divideritems'>
                <Link to="/" className='itemdivider'>Home</Link>
                <Link to='/features' className='itemdivider'>Features</Link>
                <Link to='/about' className='itemdivider'>About</Link>
                <Link to='/links' className='itemdivider'>Links</Link>
                </Group>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
          </ScrollArea>
      </Drawer>

          </div>
  
}

export default Header;