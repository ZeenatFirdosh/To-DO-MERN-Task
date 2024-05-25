import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskFormPage from "./pages/TaskFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<TaskListPage />} />
        <Route path="/create" element={<TaskFormPage />} />
        <Route path="/edit/:id" element={<TaskFormPage />} />
      </Routes> ̰
    </Router>
  );
}

export default App;
