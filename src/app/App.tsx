import { Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '../utils/i18n';
import { MainLayout } from '../layouts';
import { AboutUs, Contacts, CrayFish, Delivery, Promotions, Shrimp } from '../pages';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Navigate to='/cray-fish' />} />
          <Route path='/cray-fish' element={<CrayFish />} />
          <Route path='/shrimp' element={<Shrimp />} />
          <Route path='/delivery' element={<Delivery />}/>
          <Route path='/promotions' element={<Promotions />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Route>

        <Route path='/login' element={<div>Login Page</div>}/>
        <Route path='/registration' element={<div>Registration Page</div>}/>

        <Route path='*' element={<Navigate to='/cray-fish' />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;