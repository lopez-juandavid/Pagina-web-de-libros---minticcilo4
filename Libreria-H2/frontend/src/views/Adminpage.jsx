import React from 'react';
import CardsAdmin from '../components/CardsAdmin';
import NavbarAdmin from '../components/NavbarAdmin';
import Footer from '../components/Footer';
import { useApiGet } from '../hooks/useApiGet';

const Adminpage = () => {

  useApiGet();

  return (
    <div>
      <NavbarAdmin />
      <CardsAdmin />
      <Footer />

    </div>
  )
}

export default Adminpage
