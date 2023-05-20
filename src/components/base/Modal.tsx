import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
}

const modalContainer = document.querySelector('.modal-container');
const containerElement = modalContainer || document.createElement('div');

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return createPortal(
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-300 opacity-80'></div>
      <div className='absolute inset-40 p-10 bg-white'>I am a modal</div>
    </div>,
    containerElement,
  );
};

export default Modal;
