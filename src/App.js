import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useAuth } from "./auth";
import { logIn, signUp, logOut } from "./user";
import Profile from "./Pages/Profile"

export default function App() {
  const user = useAuth();
  if (!user) return <Welcome />;
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Route path="/">
        <div className="App">
          <h1>Hello {user.displayName || user.email}</h1>
          <button onClick={logOut}>Log out</button>
        </div>
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
    </Router>
  );
}

// these are just standard forms that call logIn/signUp respectively
function Welcome() {
  return (
    <div>
      <section>
        <h2>Log in to your account</h2>
        <LogInForm />
      </section>
      <section>
        <h2>Create a new account</h2>
        <SignUpForm />
      </section>
    </div>
  );
}

function LogInForm() {
  const [status, setStatus] = React.useState("idle");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setStatus("loading");
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log({ email, password });
        logIn(email, password)
          .then(() => setStatus("success"))
          .catch(error => {
            console.error(error);
            setStatus("failure");
          });
      }}
    >
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" required />
      <button type="submit">
        Log in
        {status === "loading" && "..."}
      </button>
      <div aria-live="polite">
        {status === "failure" && "Something went wrong"}
      </div>
    </form>
  );
}

function SignUpForm() {
  const [status, setStatus] = React.useState("idle");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setStatus("loading");
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        signUp(email, password)
          .then(() => setStatus("success"))
          .catch(error => {
            console.error(error);
            setStatus("failure");
          });
      }}
    >
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" required />
      <button type="submit">
        Sign up
        {status === "loading" && "..."}
      </button>
      <div aria-live="polite">
        {status === "failure" && "Something went wrong"}
      </div>
    </form>
  );
}
