import React from 'react';
import { lazy, Suspense } from 'react';
import { Register, Landing, Error, ProtectedRoute } from './pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    AddJob,
    AllJobs,
    Profile,
    SharedLayout,
    Stats,
} from './pages/Dashboard';
// const AddJob = lazy(() => import('./pages/Dashboard'));
// const AllJobs = lazy(() => import('./pages/Dashboard'));
// const Profile = lazy(() => import('./pages/Dashboard'));

// // const SharedLayout = lazy(() => import('./pages/Dashboard'));
// // const Stats = lazy(() => import('./pages/Dashboard'));

function App() {
    return (
        <BrowserRouter>
            {' '}
            <Routes>
                {' '}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Stats />} />
                    <Route path="add-job" element={<AddJob />} />
                    <Route path="all-jobs" element={<AllJobs />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/landing" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />{' '}
            </Routes>{' '}
        </BrowserRouter>
    );
}

export default App;
