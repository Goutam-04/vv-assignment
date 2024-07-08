
import { auth, db } from "../config";
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';


const Navbar = () => {


  const signOut = async () => {
    const user = auth.currentUser;
    if (user) {

      await updateDoc(doc(db, 'users', user.uid), {
        isOnline: false,
        lastActive: serverTimestamp(),
      });
      await auth.signOut();
    };}
    
    return (

// @ts-ignore
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        {/* @ts-ignore */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* @ts-ignore */}
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* @ts-ignore */}
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        {/* @ts-ignore */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VideoVerse</span>
          </a>
        {/* @ts-ignore */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {/* @ts-ignore */}
            <button type="button" onClick={signOut} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>

          </div>

        </div>
      </nav>

    )
  }

  export default Navbar