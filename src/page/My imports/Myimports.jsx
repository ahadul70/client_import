import React, { useContext, useEffect } from 'react'
import { Importproducts } from '../../components/Importproducts/Importproducts';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';


const importpromise = fetch("http://localhost:3000/myimports").then((res) =>
  res.json()
);
const Myimports = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
  const { user } = useContext(AuthContext);
    useEffect(() => {
      if (!user) {
        navigate("/login", { state: { from: from } });
      }
    }, [user, navigate, from]);
  return (
    <>
      <Importproducts importpromise={importpromise} />
    </>
  );
}

export default Myimports