import React, {useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gif from './Gif'


const MyModal = ({item, open, callback}) => {

    const [showModal, setShow] = useState(open);

    const handleClose = () => {
        setShow(false)
        callback(false)
    }
    return (
        <Modal show={showModal} onHide={handleClose} size={'lg'} data-toggle="modal" data-target={item.id}>
            <Modal.Header>{item.title}</Modal.Header>
            <Modal.Body>
                <div className="center">
                <Gif url={item.images.original.url} alt={item.slug}/>
                </div></Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>close</Button>
            </Modal.Footer>
        </Modal>
    )
}

MyModal.propTypes = {
    open: PropTypes.bool,
    itew: PropTypes.object,
    callback: PropTypes.func,
  };

export default MyModal
