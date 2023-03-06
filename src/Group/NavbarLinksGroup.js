import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
  IconNotes,
  IconHome,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons';
import { LinksGroup } from './LinksGroup';

const mockdata = [
  { label: '主頁',  initiallyOpened: true,icon: IconHome,link:'/',linkk:'/'},
  { label: '遊戲',  initiallyOpened: true,icon: IconGauge,link:'/',linkk:'https://ultimate-survior2.web.app/'},
  {
    label: '亞洲熱門地區',
    icon: IconNotes,
    links: [
      { label: '台灣', link: '/' },
      { label: '中國', link: '/' },
      { label: '日本', link: '/' },
      { label: '泰國', link: '/' },
    ],
  },
  {
    label: '美洲熱門地區',
    icon: IconNotes,
    links: [
      { label: '紐約', link: '/' },
      { label: '洛杉磯', link: '/' },
      { label: '聖地牙哥', link: '/' },
      { label: '聖保羅', link: '/' },
    ],
  },
  {
    label: '非洲熱門地區',
    icon: IconNotes,
    links: [
      { label: '埃及', link: '/' },
      { label: '尼日利亞', link: '/' },
      { label: '摩洛哥', link: '/' },
      { label: '突尼斯', link: '/' },
    ],
  },
  {
    label: '大洋洲熱門地區',
    icon: IconNotes,
    links: [
      { label: '印度尼西亞', link: '/' },
      { label: '澳大利亞', link: '/' },
      { label: '紐西蘭', link: '/' },
      { label: '吐瓦魯', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));
const NavbarLinksGroup =() => {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar  height='100vh' width={{ sm: 250 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
export default NavbarLinksGroup