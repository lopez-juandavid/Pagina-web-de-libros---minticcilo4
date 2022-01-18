import React from 'react';
import CardsAdmin from '../components/CardsAdmin';
import NavbarAdmin from '../components/NavbarAdmin';
import Footer from '../components/Footer';
import { useApiGet } from '../hooks/useApiGet';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Adminpage = () => {

  useApiGet();

  const history = useHistory();
  
  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (ls === null || rol !== "_admin_" ) history.push("/")
    
  });
  
  return (
    <div>
      <NavbarAdmin />
      <CardsAdmin />
      <Footer />

    </div>
  )
}

export default Adminpage
