import React from 'react';

interface ModalBodyProps {
    content?: string,
}

export const ModalBody = ({
    content,
}: ModalBodyProps) => {
    return (
        <div className="modal-body-container">
            {content}
        </div>
    )
}