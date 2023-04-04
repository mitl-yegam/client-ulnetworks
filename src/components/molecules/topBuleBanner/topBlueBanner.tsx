import { ReactNode } from "react";

const TopBlueBanner = ({children}: {children: ReactNode}) => {
    return (
        <section className="container-fluid bg-blue-100 py-3 py-md-9">
        <div className="container white text-center">
         {children}
        </div>
      </section>
    )
};

export default TopBlueBanner;