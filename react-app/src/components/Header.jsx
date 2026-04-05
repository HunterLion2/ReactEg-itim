export default function Header() {
  // Burada html yazdığımız return olmak zorundadır çünkü burası aslında bir js'dir bizim bunu burada döndürmemiz için bu gereklidir.
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Movie App
          </a>
        </div>
      </nav>
    </div>
  );
}
