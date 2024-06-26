import "./App.css";
import TodoList from "./TodoList";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList title="Walmart" />
        <TodoList title="Harmons" />
        <TodoList title="Smiths" />
      </main>
    </>
  );
}

export default App;
