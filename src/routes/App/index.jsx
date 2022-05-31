import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Home } from '../../pages/Home';
import { UserHome } from '../../pages/Home/UserHome';
import { Signin } from '../../pages/Signin';
import { Signup } from '../../pages/Signup';
import { NotFound } from '../../pages/NotFound';
import { AppContext } from '../../context/AppContext';
import { useInitialState } from '../../hooks/useInitialState'

const App = () => {
    const inicialState = useInitialState()

    return (
        <AppContext.Provider value={ inicialState }>
            <BrowserRouter>
                {/* <Layout> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<UserHome />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                {/* </Layout> */}
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };
