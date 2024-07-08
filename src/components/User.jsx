


const User = ({ icon, name, isOnline }) => {
  return (
    // @ts-ignore
    <div className="flex items-center gap-4 p-2 bg-gray-800 rounded-md">
      {/* @ts-ignore */}
      <img src={icon} alt="User Icon" className="w-12 h-12 rounded-full" />
      {/* @ts-ignore */}
      <span className="text-xl">{name}</span>
      {/* @ts-ignore */}
      {(isOnline)?<span>online</span>:null}
    </div>
  );
};

export default User;
