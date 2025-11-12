import React from 'react'
import { Importproducts } from '../../components/Importproducts/Importproducts';


const importpromise = fetch("http://localhost:3000/myimports").then((res) =>
  res.json()
);
const Myimports = () => {

  return (
    <>
      <Importproducts importpromise={importpromise} />
    </>
  );
}

export default Myimports