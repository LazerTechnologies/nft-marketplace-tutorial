import Header from "../components/Header";
import { ReactNode } from "react";

export default function TopNavbarLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
