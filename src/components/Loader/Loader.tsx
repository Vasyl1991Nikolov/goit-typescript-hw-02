import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <TailSpin color="#007bff" height={50} width={50} />
    </div>
  );
};

export default Loader;
