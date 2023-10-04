import { Outlet } from 'react-router-dom';

function Maincontent() {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
}

export default Maincontent;
