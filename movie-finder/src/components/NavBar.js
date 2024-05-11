import { Logo } from "./Logo";

export function NavBar({ children }) {
  //structural comp
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
