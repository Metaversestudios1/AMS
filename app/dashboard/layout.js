import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="flex flex-row h-[100vh]">
          <div>
            <Sidebar /> 
          </div>
          <div className="flex flex-col h-[100vh] w-[100vw] overflow-x-hidden">
            <div>
              <Navbar />
            </div>
            <div className="children ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
