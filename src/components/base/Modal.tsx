import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  actionBar: ReactNode;
  children: ReactNode;
  onClose: () => void;
}

const modalContainer = document.querySelector('.modal-container');
const containerElement = modalContainer || document.createElement('div');

const Modal: React.FC<ModalProps> = ({ actionBar, children, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return createPortal(
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    containerElement
  );
};

export default Modal;
