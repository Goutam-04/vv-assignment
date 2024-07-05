import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../config';
import Navbar from './Navbar';
import User from './User';

interface UserData {
  uid: string;
  displayName: string;
  photoURL: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([{
    uid:"2",displayName:"goutam",photoURL:"./asdfawe.png"
  }]);
  

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const usersCollection = collection(db, 'users');
  //     const usersSnapshot = await getDocs(usersCollection);
  //     const usersList = usersSnapshot.docs.map(doc => doc.data() as UserData);
  //     setUsers(usersList);
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-4 grid grid-cols-1 gap-4">
        {users.map(user => (
          <User key={user.uid} icon={user.photoURL} name={user.displayName} />
        ))}
      </div>
    </div>
  );
};

export default Users;
