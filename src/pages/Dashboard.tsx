

import Users from '../components/Users';
import ChatMenu from '../components/ChatMenu';

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="col-span-1 border-r border-gray-300">
        <Users />
      </div>
      <div className="col-span-2">
        <ChatMenu />
      </div>
    </div>
  );
};

export default Dashboard;