import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../config';
import Navbar from './Navbar';
import User from './User';

interface UserData {
  uid: string;
  displayName: string;
  photoURL: string;
  isOnline: boolean;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList: UserData[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          usersList.push({
            uid: doc.id,
            displayName: data.displayName,
            photoURL: data.photoURL,
            isOnline: data.isOnline,
          });
        });

        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-4 grid grid-cols-1 gap-4">
        {users.map(user => (
          <User 
            key={user.uid} 
            icon={user.photoURL} 
            name={user.displayName} 
            isOnline={user.isOnline} 
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
