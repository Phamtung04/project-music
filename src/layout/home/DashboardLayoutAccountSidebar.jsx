import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PageContent from '../../components/sidebar/PageContent';
import CustomAppTitle from '../../components/sidebar/CustomAppTitle';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'home',
    title: 'Trang chủ',
    icon: <HomeIcon />,
  },
  {
    segment: 'playlist',
    title: 'Playlist',
    icon: <MusicNoteIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: true,
    dark: {
      palette: {
        background: {
          default: '#111827', // Màu xám nhạt
          paper: '#111827', // Màu xám trung bình
        },
        text: {
          primary: 'var(--color-white)', // Màu chữ xám đậm
          secondary: 'var(--color-white)', // Màu chữ xám nhạt hơn
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};

function DashboardLayoutAccountSidebar() {
  // const [pathname, setPathname] = React.useState('/dashboard');

  // const router = React.useMemo(() => {
  //   return {
  //     pathname,
  //     searchParams: new URLSearchParams(),
  //     navigate: (path) => setPathname(String(path)),
  //   };
  // }, [pathname]);

  const location = useLocation();
  const navigate = useNavigate();

  const [session, setSession] = React.useState(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        navigate('/login');
        setSession(demoSession);
      },
      signOut: () => {
        localStorage.removeItem('music_token');
        setSession(null);
        console.log('delete token success');
      },
    };
  }, []);

  const router = React.useMemo(() => {
    return {
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    };
  }, [location, navigate]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      authentication={authentication}
      session={session}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          // toolbarAccount: ToolbarActionsSearch,
          // sidebarFooter: SidebarFooterAccount,
        }}
      >
        <PageContent pathname={router.pathname}>
          <Outlet />
        </PageContent>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutAccountSidebar;
