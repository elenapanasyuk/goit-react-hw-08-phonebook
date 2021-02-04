import React from 'react';
import s from './View.module.css';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function HomeView() {
  return (
    <div>
      <h1 className={s.heading}>Welcome to contact saving app!</h1>
      <p className={s.text}>Store all your contacts in one place</p>
    </div>
  );
}
