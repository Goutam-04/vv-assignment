
interface UserProps {
  icon: string;
  name: string;
}

const User: React.FC<UserProps> = ({ icon, name,isOnline }) => {
  return (
    <div className="flex items-center gap-4 p-2 bg-gray-800 rounded-md">
      <img src={icon} alt="User Icon" className="w-12 h-12 rounded-full" />
      <span className="text-xl">{name}</span>
      {(isOnline)?<span>online</span>:null}
    </div>
  );
};

export default User;
