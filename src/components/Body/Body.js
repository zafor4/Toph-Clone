import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home/Home';
import Contests from './contests/Contests';
import Leaderboard from './leaderboard/Leaderboard';
import Problems from './problems/Problems';
import Tutorial from './tutorials/Tutorials';
import Authentication from './Authentication/Authentication';
import HomeAuthenticated from './Home/HomeAuthenticated';
import Admin from '../../Admin';
import Solve from './solve/Solve';

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

function Body(props) {
  const { token } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Store the current location before redirecting to the authentication page
    if (!token && location.pathname !== '/authentication') {
      localStorage.setItem('prevLocation', location.pathname);
    }
  }, [location.pathname, token]);

  useEffect(() => {
    // Redirect to the previous location after successful login
    if (token && location.pathname === '/authentication') {
      const prevLocation = localStorage.getItem('prevLocation') || '/';
      navigate(prevLocation, { replace: true });
      localStorage.removeItem('prevLocation');
    }
  }, [token, navigate, location.pathname]);

  return (
    <div>
      <Routes>
        <Route path='/' element={token ? <HomeAuthenticated /> : <Home />} />
        <Route path='/contests' element={<Contests />} />
        {token && <Route path='/leaderboard' element={<Leaderboard />} />}
        <Route path='/problems' element={<Problems />} />
        <Route path='/tutorials' element={<Tutorial />} />
        {!token && <Route path='/authentication' element={<Authentication />} />}
        <Route path='/admin' element={<Admin />} />
        {token && <Route path='/solve' element={<Solve />} />}
      </Routes>
    </div>
  );
}

export default connect(mapStateToProps)(Body);
