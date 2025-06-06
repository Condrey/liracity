"use client";
import { Session, User } from "lucia";
import { createContext, useContext } from "react";

type SessionContext =
  | { user: User; session: Session | null }
  | { user: User | null; session: Session | null };

const sessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContext }>) {
  return (
    <sessionContext.Provider value={value}>{children}</sessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(sessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider.");
  }
  return context;
}
