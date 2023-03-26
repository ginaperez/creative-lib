import React, { useState } from 'react';

interface ModalProps {
    content?: JSX.Element;
    modalButton?: JSX.Element;
}

export const Modal = ({
    content,
    modalButton,
}: ModalProps) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    return (
        <div>
            {
                isModalOpen && (
                    <div className="modal-container">
                        <div className="modal-content">
                            {content}
                        </div>
                    </div>
                )
            }
            <div
                onClick={() => setIsModalOpen(true)}
            >
                {modalButton}
            </div>
        </div>
    )
};

export default Modal;