import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../components';
import style from './mainLayout.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className="position-relative h-100">
      <div className={`${style.mainHeader} position-fixed start-0 end-0`}>
        <Header />
      </div>
      
      <Outlet />

      <Footer />
    </div>
  )
}
