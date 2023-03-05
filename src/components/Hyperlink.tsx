import React from 'react';
import '../sass/index.scss';

interface HyperlinkProps {
    primary?: boolean;
    children: string;
    link: string;
    onClick?: () => void;
}

export const Hyperlink = ({
    primary = false,
    children,
    link,
    ...props
}: HyperlinkProps) => {
    const mode = primary ? 'hyperlink--primary' : 'hyperlink-secondary';
    return (
        <a href={link} 
            className={['hyperlink', mode].join(' ')}
            {...props}
        >
            {children}
        </a>
    );
};