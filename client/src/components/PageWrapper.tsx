import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default PageWrapper;
