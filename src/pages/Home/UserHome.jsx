import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import { Navigate } from 'react-router-dom';

const UserHome = () => {
    const { login } = useContext(AppContext)

    return (
        <div>
            {!login && <Navigate replace={true} to='/' /> }
            UserHome
        </div>
    );
}

export { UserHome };
