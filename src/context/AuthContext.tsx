// // AuthContext.tsx

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../config'; // Assuming you have Firebase initialized

// interface AuthContextType {
//   currentUser: firebase.User | null;
// }

// const AuthContext = createContext<AuthContextType>({ currentUser: null });

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider= ({ children }) => {
//   const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
