
import { Modal } from 'react-bootstrap';
import React from 'react'

export const GenericModal = (props) =>
  <Modal show={props.show} onHide={props.onHide}>
    {props.children}
  </Modal>
