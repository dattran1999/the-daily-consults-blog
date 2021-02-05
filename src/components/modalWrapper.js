import React from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Flex from './flex';
import { ModalContext } from '../context/modal';

Modal.setAppElement('#___gatsby');

const ModalWrapper = ({ children, backgroundColor }) => {
  const [state, dispatch] = React.useContext(ModalContext);

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
    dispatch({ type: 'toggle_button' })
  }
  return (
    <Modal
      isOpen={state.active}
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
