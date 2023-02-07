import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main
        className="max-w-[90%] mx-auto mt-4 py-10
      "
      >
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
