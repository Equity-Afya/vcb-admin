import React from "react";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victoria Bank Admin Portal",
  description: "This is the Victoria Bank Admin Portal for User Management",
};

const layout = () => {
  return (
    <div>
      <body className="layouts">
        <div className="childrens">{children}</div>
      </body>
    </div>
  );
};

export default layout;
