import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Kajol",
      email: "kajol@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User is {user ? user.name : "Guest"}</div>
      <div>Email: {user ? user.email : "N/A"}</div>
    </div>
  );
};

export default User;
