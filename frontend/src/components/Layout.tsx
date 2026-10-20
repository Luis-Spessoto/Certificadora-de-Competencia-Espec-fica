import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Activity, AlertTriangle, BookOpen, CalendarDays, ChartNoAxesCombined, ChevronRight, GraduationCap, LayoutDashboard, LogOut, Users } from 'lucide-react';
const links = [
 {to:'/dashboard',label:'Painel',icon:LayoutDashboard},
 {to:'/docentes',label:'Docentes',icon:Users},
 {to:'/grade',label:'Grade de horários',icon:CalendarDays},
 {to:'/alertas',label:'Inconsistências',icon:AlertTriangle},
 {to:'/relatorios',label:'Relatórios',icon:BookOpen}
];
export default function Layout(){ const navigate=useNavigate(); return <div className="app-shell"><aside className="sidebar"><div className="brand"><div className="brand-mark"><GraduationCap size={20}/></div><div><span>UTFPR-CP</span><strong>DACOM Horários</strong></div></div><div className="side-caption">MENU PRINCIPAL</div><nav>{links.map(({to,label,icon:Icon})=><NavLink key={to} to={to} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span>{label==='Inconsistências'&&<span className="nav-dot"/>}</NavLink>)}</nav><div className="sidebar-bottom"><div className="profile"><div className="avatar">DA</div><div><strong>Perfil: Usuário</strong><span>DACOM · UTFPR</span></div></div><button className="logout" onClick={()=>navigate('/')}><LogOut size={16}/> Sair</button></div></aside><main className="main-area"><header className="topbar"><div><span className="eyebrow">UTFPR — Cornélio Procópio</span><h1>Gestão de Horários</h1></div><div className="topbar-right"><span className="system-status"><span/> Sistema de acompanhamento</span><div className="top-avatar">DA</div></div></header><div className="page-content"><Outlet/></div><footer className="footer">DACOM — Universidade Tecnológica Federal do Paraná · Campus Cornélio Procópio</footer></main></div> }
