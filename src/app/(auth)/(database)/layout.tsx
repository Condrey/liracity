import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { user } = await validateRequest();

  // if (user) redirect(roleRedirectPaths[user.role]);

  return <>{children}</>;
}
