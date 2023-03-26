import React from 'react';

interface ModalHeaderProps {
    content?: string;
}

export const ModalHeader = ({
    content,
}: ModalHeaderProps) => {
    return (
        <div className="modal-header-container">
            {content}
        </div>
    )
}