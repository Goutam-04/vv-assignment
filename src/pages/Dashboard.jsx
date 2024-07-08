

import Users from '../components/Users';
import ChatMenu from '../components/ChatMenu';

const Dashboard = () => {
  return (
    // @ts-ignore
    <div className="h-screen grid grid-cols-3">
      {/* @ts-ignore */}
      <div className="col-span-1 border-r border-gray-300">
      {/* @ts-ignore */}
        <Users />
      </div>
      {/* @ts-ignore */}
      <div className="col-span-2">
      {/* @ts-ignore */}
        <ChatMenu />
      </div>
    </div>
  );
};

export default Dashboard;