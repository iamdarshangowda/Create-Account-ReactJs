import "./index.css";

function App() {
  return (
    <div className="App">
      {/* <img
        src={process.env.PUBLIC_URL + "/images/background.png"}
        alt="background"
      />
  */}
      <form action="#" name="formInput" autoComplete="on" id="container">
        <label id="email-label" for="email">
          Your email address
        </label>
        <input type="email" id="email" name="email" required />
        <br />
        <label id="password-label" for="password">
          Your password
        </label>

        <input type="password" id="password" name="password" required />
        <br />
        <label id="rpassword-label" for="rpassword">
          Confirm your password
        </label>

        <input type="password" id="password" name="rpassword" required />
        <br />
        <label id="full-name" for="name">
          Your full name
        </label>

        <input type="text" id="full-name" name="name" required />
        <br />
        <label id="phone-number" for="phone-number">
          Your phone number
        </label>

        <input
          type="number"
          id="phone-number"
          name="phone-number"
          pattern="[1-9]{1}[0-9]{9}"
          min="10"
          max="10"
        />
        <br />
        <input type="checkbox" id="terms" name="terms" />
        <label for="terms">I read and agree Terms and Conditions</label>
        <input type="button" id="create" name="create" value="Create Account" />
      </form>
    </div>
  );
}

export default App;
