import React from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Flex from './flex';

Modal.setAppElement('#___gatsby');

const ModalWrapper = ({ isOpen, closeModal, children, backgroundColor, ...rest }) => {
  const customStyles = {
    content: {
      height: '60vh',
      width: '70vw',
      maxWidth: '900px',
      minWidth: '270px',
      margin: 'auto',
      marginTop: '8rem',
      backgroundColor: backgroundColor,
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      {...rest}
    >
      <CloseModalButton onClick={closeModal} />
      <Flex valign='center' halign='center' style={{ width: '100%', height: '100%' }}>
        {children}
      </Flex>
    </Modal>
  )
}

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 4%;
`;

export default ModalWrapper;
