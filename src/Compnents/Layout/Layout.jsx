import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/MainContant';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div>
         <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
}

export default Layout;
