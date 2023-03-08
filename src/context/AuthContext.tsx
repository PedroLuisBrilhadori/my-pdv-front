import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { ApiRoutes, headers } from "../services/api";
import Router from "next/router";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    const fetchUser = async () => {
      const response = await fetch(ApiRoutes.user.get, {
        headers: { authorization: `Bearer ${token}` },
      });

      const { user } = await response.json();

      setUser(user);
    };

    if (token) {
      fetchUser().catch((error) => console.error(error));
    } else {
      Router.push("/login");
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const request = await fetch(ApiRoutes.user.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const { success, token, user, message } = await request.json();

    if (!success) throw { message, status: request.status };

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    headers.append("Authorization", `Bearer ${token}`);

    setUser(user);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
