import { useEffect } from "react";
import { createContext, useState } from "react";

//creating our context
const AuthContext = createContext({
  user: null,
});

//define our provider

const AuthProvider = ({ children }) => {
  //setting state for authenticated user
  const [user, setUser] = useState(null);

  //useEffect to check the auth state of the user if they are logged in or not
  //when updating state inside a useEffect never pass a dependency array to avoid inifinite loop

  useEffect(() => {
    //Getting the saved user from the localstorage after logging in
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const currentUser = JSON.parse(savedUser);
      setUser(currentUser);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
