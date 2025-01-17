import type { PropsWithChildren } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Snackbar } from './components/Snackbar/Snackbar';
import { SupportModal } from './components/SupportModal/SupportModal';
import Background from '@/components/Background';
import { PartnerThemeFooterImage } from './components/PartnerThemeFooterImage';

interface LayoutProps {
  fixedPoweredBy?: boolean | undefined;
  disableNavbar?: boolean;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  disableNavbar = false,
  fixedPoweredBy,
}) => {
  return (
    <>
      <Background />
      <Navbar disableNavbar={true} />
      {children}
      {/* <SupportModal /> */}
      {/* <Snackbar /> */}
      {/* <PartnerThemeFooterImage /> */}
    </>
  );
};
