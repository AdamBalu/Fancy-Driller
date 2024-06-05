import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8">{children}</div>
  );
};

export default Layout;
