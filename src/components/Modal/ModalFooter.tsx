import React from 'react';

interface ModalFooterProps {
    content?: JSX.Element;
}

export const ModalFooter = ({
    content,
}: ModalFooterProps) => {
    return (
        <div className="modal-footer-container">
            {content}
        </div>
    )
}

export default ModalFooter;