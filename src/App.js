import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import BookPage from "./components/BookPage/BookPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/book/:id" component={BookPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
