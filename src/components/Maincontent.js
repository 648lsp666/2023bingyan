import { Outlet } from 'react-router-dom';

function MainContent() {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
}

export default MainContent;
