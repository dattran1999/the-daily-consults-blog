import React from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Flex from './flex';

Modal.setAppElement('#___gatsby');

const ModalWrapper = ({ isOpen, closeModal, children, backgroundColor }) => {
  const customStyles = {
    content: {
      height: '60vh',
      width: '70vw',
      maxWidth: '900px',
      margin: 'auto',
      marginTop: '8rem',
      backgroundColor: backgroundColor,
      overflow: 'hidden'
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
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
