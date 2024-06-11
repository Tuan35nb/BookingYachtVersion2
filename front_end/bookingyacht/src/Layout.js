import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import App from './App';
import Information from './components/auths/Information';
import Signin from './components/auths/Signin';
import Signup from './components/auths/Signup';
import Bill from './components/company/Bill';
import ManageCompany from './components/company/ManageCompany';
import ViewBooking from './components/company/ViewBooking';
import ViewYacht from './components/company/ViewYacht';
import HomePage from './components/home/HomePage';
import YachtQuestion from './components/yacht/YachtQuestion';
import YachtRule from './components/yacht/YachtRule';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/blog/Blog';
import MainPage from './components/detailYacht/mainDetailPage/MainPage';
import Enterprise from './components/enterprise/Enterprise';
import FindYacht from './components/yacht/FindYacht';
import ForgotPassword from './components/auths/ForgotPassword';
import Profile from './components/home/Profile';
import ProfileCompany from './components/company/Profile';
import InformationCompany from './components/auths/InformationCompany';
import ManageYacht from './components/company/ManageYacht';
import ManageRoom from './components/company/ManageRoom';
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/doanhnhiep' element={<Enterprise />} />
                    <Route path='maybay' element={<MainPage />} />
                    <Route path='/duthuyen' element={<FindYacht />} />
                    <Route path='/yacht-rule' element={<YachtRule />} />
                    <Route path='/yacht-question' element={<YachtQuestion />} />
                </Route>

                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/forgotpassowd' element={<ForgotPassword />}></Route>
                <Route path='/information' element={<Information />} />
                <Route path='/information-company' element={<InformationCompany />} />



                <Route path='/manage-company' element={<ManageCompany />} >
                    <Route index element={<ViewBooking />} />
                    <Route path='view-yacht' element={<ViewYacht />} />
                    <Route path='bill' element={<Bill />} />
                    <Route path='profile' element={<ProfileCompany />} />
                </Route>

                <Route path='manage-yacht' element={<ManageYacht />} />
                <Route path='manage-room' element={<ManageRoom />} />


            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Layout;