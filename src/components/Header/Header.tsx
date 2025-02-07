import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <a className="link" href="/">
        Paula Rynty
      </a>
      <div className="header-content-right">
        <a className="link" href="https://github.com/paularynty">
          GitHub
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}