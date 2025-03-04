import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconGauge,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
  } from '@tabler/icons-react';
  import { ScrollArea } from '@mantine/core';
  import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
  import classes from './NavbarNested.module.css';
  
  const mockdata = [
    { label: 'Dashboard', 
      icon: IconGauge,
      initiallyOpened: true,
      link: '/dashboard'
     },
    {
      label: 'Market news',
      icon: IconNotes,
      initiallyOpened: true,
      link : '',
      links: [
        { label: 'Overview', link: '/overview' },
        { label: 'Forecasts', link: '/' },
        { label: 'Outlook', link: '/' },
        { label: 'Real time', link: '/' },
      ],
    },
    {
      label: 'Releases',
      icon: IconCalendarStats,
      link : '',
      links: [
        { label: 'Upcoming releases', link: '/upcoming-release' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics, link : '', },
    { label: 'Contracts', icon: IconFileAnalytics, link : '', },
    { label: 'Settings', icon: IconAdjustments, link : '', },
    {
      label: 'Security',
      icon: IconLock,
      link : '',
      links: [
        { label: 'Enable 2FA', link: '/' },
        { label: 'Change password', link: '/' },
        { label: 'Recovery codes', link: '/' },
      ],
    },
  ];
  
  export function NavbarNested() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  
    return (
      <>
      <nav className={classes.navbar}>
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner2}>{links}</div>
        </ScrollArea>
      </nav>
      </>
    );
  }