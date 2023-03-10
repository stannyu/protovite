import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1> πΏ Profile component</h1>
    </div>
  );
};

const Account = () => {
  return (
    <div>
      <h1> π° Account component</h1>
    </div>
  );
};

const User = () => {
  return (
    <div>
      <h1>ππ»ββοΈUser component:</h1>
      <nav>
        <Link to="profile"> - Profile</Link>
        <Link to="account"> - Account</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export { User, Profile, Account };
