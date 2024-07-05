import { auth } from "./config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import SignIn from './pages/SignIn'
import Dashboard from "./pages/Dashboard";
function App() {
  const [user] = useAuthState(auth);
  return (
    <div>  
      {!user ? (
        <SignIn/>
      ) : (
        <>
          <Dashboard/>
        </>
      )}
    </div>
  );
}

export default App;
