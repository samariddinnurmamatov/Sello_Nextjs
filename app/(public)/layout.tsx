import { Fragment } from 'react';
import { RootLayoutTypes } from '@/types';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function PublicLayout({ children }: RootLayoutTypes) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}


