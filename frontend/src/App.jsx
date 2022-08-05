import { useState } from "react";
import reactLogo from "assets/react.svg";
import viteLogo from "assets/vite.svg";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Helmet>
        <title>Bubu | Home</title>
        <link rel="icon" type="image/svg+xml" href={viteLogo} />
      </Helmet>
      <section>Home</section>
    </div>
  );
}

export default App;
