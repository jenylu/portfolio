import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import GoToTop from '../components/GoToTop';

function Illustration() {
  useEffect(() => {
    document.title = 'Jennifer Lu | Illustration';
  }, []);

  return (
    <div>
      <div className="content">
        <Outlet />
      </div>
      <GoToTop />
    </div>
  );
}

export default Illustration;
