import React from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Flex from './flex';

const ModalWrapper = ({ showModal, setShowModal, children, backgroundColor }) => {
  const customStyles = {
    content: {
      height: '50vh',
      width: '50vw',
      margin: 'auto',
      backgroundColor: backgroundColor,
      overflow: 'hidden'
    }
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <Modal
      isOpen={showModal}
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
  left: 96%;
`;

export default ModalWrapper;