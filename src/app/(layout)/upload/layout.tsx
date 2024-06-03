import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col mt-16 gap-8 items-center">
            {children}
        </div>
    )
}

export default Layout;