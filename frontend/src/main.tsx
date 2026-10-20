import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import TeacherDetail from './pages/TeacherDetail';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import Schedule from './pages/Schedule';
import './styles.css';
function App(){return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/login" element={<Login/>}/><Route element={<Layout/>}><Route path="/dashboard" element={<Dashboard/>}/><Route path="/docentes" element={<Teachers/>}/><Route path="/docentes/:id" element={<TeacherDetail/>}/><Route path="/alertas" element={<Alerts/>}/><Route path="/relatorios" element={<Reports/>}/><Route path="/grade" element={<Schedule/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
