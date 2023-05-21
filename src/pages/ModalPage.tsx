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

  const actionBarProp = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBarProp}>
      <p>Here is an important agreement to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dicta explicabo suscipit, fugit nostrum porro
        perspiciatis sed officia, unde omnis in quod repellendus dignissimos aut quasi animi hic rem, aliquid id
        deserunt doloribus? Alias unde modi molestias aut dicta eaque qui doloremque. Facilis totam atque beatae, esse
        consectetur cum quo nihil cupiditate delectus hic vero eligendi molestiae debitis ad placeat! Exercitationem ex
        laboriosam velit, ad sunt error, animi veniam laborum minus atque facilis esse culpa repudiandae doloribus
        inventore recusandae a ab mollitia quasi quo? Dicta labore error quis? Accusamus reprehenderit laboriosam
        possimus necessitatibus cupiditate soluta! Delectus nobis nisi veniam odio.
      </p>
    </div>
  );
};

export default ModalPage;
