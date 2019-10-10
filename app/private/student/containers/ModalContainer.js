import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../presentional/Modal';

const ModalContainer = ({

}) => {
    const { showing, content } = useSelector(state => state.modalReducer);
    return (
        showing ?
        <Modal>
            {content}
        </Modal>
        :
        null
    )
};

export default ModalContainer;