import "../assets/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <a href="/" className="header__navbar--logo">
            Weather Now
          </a>
        </nav>
      </header>
    </>
  );
}
