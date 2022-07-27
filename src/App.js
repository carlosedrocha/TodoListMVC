import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import './components/style.css'
import { TodosProvider } from "./contexts/todos.js";

const App = () => {
  return (
    <TodosProvider>
      <div className="todoapp">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </TodosProvider>
  );
};

export default App;
