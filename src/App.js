import './App.css';
import { Outlet } from 'react-router-dom';
import Gnb from './components/Gnb/Gnb';

export default function App() {
  return (
    <div>
      <Gnb />
      <Outlet />
    </div>
  );
}
