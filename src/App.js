import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Text Submitted");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI FACT CHECKER </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="">
          <textarea
            value={content}
            onChange={handleChange}
            rows={20}
            cols={60}
            placeholder="Enter your content here..."
          />
        </div>
        <div>
          <button type="submit">Fact Check</button>
        </div>
      </form>
    </div>
  );
}

export default App;
