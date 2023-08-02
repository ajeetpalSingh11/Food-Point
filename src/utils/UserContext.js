import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "Deafult User",
});

export default UserContext;
