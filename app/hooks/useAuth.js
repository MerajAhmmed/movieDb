import { useContext } from "react";
import { AuthConext } from "../context";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthConext);

  return { auth, setAuth };
};
