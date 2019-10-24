import React from 'react';

import AlertBox from '../AlertBox';

import Container from './styles';

const Notifications = ({
    notifications,
    hideBox
}) =>{
    return (
        <Container>
            {
                notifications.map((notification)=>{
                    return (
                        <AlertBox 
                            key={notification.id}
                            message={notification.message}
                            hideBox={()=>hideBox(notification.id)}
                            id={notification.id}
                        />
                    )
                })
            }
        </Container>
    )
};

export default Notifications;

