import React, { useState } from 'react';

interface ModalProps {
    modalContent?: JSX.Element;
    modalButton?: JSX.Element;
    modalButtonVisible?: boolean;
    modalButtonLabel?: string;
}

export const Modal = ({
    modalContent,
    modalButton,
    modalButtonLabel,
    modalButtonVisible,
}: ModalProps) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    return (
        <div>
            {
                isModalOpen && (
                    <div className="modal-container">
                        <div className="modal-content">
                            <p className="modal-text">
                                {modalContent}
                            </p>
                            {
                               modalButtonVisible ? <button onClick={() => setIsModalOpen(false)}>{modalButtonLabel}</button> : ''
                            }
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