import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';


interface Props {
    type: 'ADD' | 'REMOVE';
}

export const Notification: React.FC<Props> = ({ type }) => {
    return (
        <div
            style={{borderBottom: `6px solid ${type === 'ADD' ? '#33cf33' : '#ff5d4b'}`}}
            data-testid="notification"
        >
            <p>{`${type === 'ADD' ? 'Added' : 'Removed'} Successfully`}</p>
            <div
                style={{color: type === 'ADD' ? '#33cf33' : '#ff5d4b'}}
            >
                {type === 'ADD' ? <ImCheckmark /> : <ImCross />}
            </div>
        </div>
    )
}
