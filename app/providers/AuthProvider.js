"use client";

import { useState } from "react";
import { AuthConext } from "../context";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  return (
    <AuthConext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthConext.Provider>
  );
}
