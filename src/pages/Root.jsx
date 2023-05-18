import React from 'react';
import { Outlet } from 'react-router-dom';
import Gnb from '../components/Gnb/Gnb';

export default function Root() {
  return (
    <div>
      <Gnb />
      <Outlet />
    </div>
  );
}
