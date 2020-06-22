import React from "react";
import firebase from "./firebase";

// use context to access user state anywhere in the component tree
// without having to explicitly pass it down as a prop
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  // Firebase will call our callback whenever its auth state changes
  // we can use this to sync the Firebase state to our React state in an effect
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    // Firebase gives us the unsub function
    // we return it so React knows to clean up when our app unmounts
    return unsubscribe;
  }, []);
  return <AuthContext.Provider {...props} value={user} />;
}

// better to wrap context access in a custom hook
// this lets you do some error handling
function useAuth() {
  const user = React.useContext(AuthContext);
  // user will be undefined if someone tries to call the hook
  // outside of an <AuthProvider>
  if (user === undefined)
    throw new Error("useAuth must be called within an AuthProvider");
  return user;
}

export { AuthProvider, useAuth };
