import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { href } from "react-router";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const email = useRef();
  const password = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();

    const raw = localStorage.getItem("userinfolist");
    const list = raw ? JSON.parse(raw) : [];

    for (let i = 0; i < list.length; i++) {
      if (
        list[i][0] === email.current.value &&
        list[i][1] === password.current.value
      ) {
        navigate("/");
        console.log("Başarılı");
        return;
      }
    }
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    ref={email}
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    ref={password}
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
