import Button from '../components/base/Button';
import Modal from '../components/base/Modal';
import React, { useState } from 'react';

const ModalPage: React.FC = () => {
  const [showModal, setShowMOdal] = useState(false);

  const handleClick = (): void => {
    setShowMOdal(true);
  };

  const handleClose = (): void => {
    setShowMOdal(false);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPage;
