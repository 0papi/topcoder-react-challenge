import React from 'react';

interface Props {
    width?: number;
    height?: number;
}

const PlaceholderThumbnail: React.FC<Props> = ({ width = 50, height = 50 }) => {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: 'lightgray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <span style={{ fontSize: '0.75em' }}>No Photo</span>
        </div>
    );
};

export default PlaceholderThumbnail;
