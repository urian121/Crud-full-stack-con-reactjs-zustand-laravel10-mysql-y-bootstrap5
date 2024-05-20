import "./App.css";
import EmpleadoForm from "./components/EmpleadoForm";
import EmpleadoList from "./components/EmpleadoList";

const App = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-4 border_right">
        <EmpleadoForm />
      </div>
      <div className="col-md-8 border_right">
        <EmpleadoList />
      </div>
    </div>
  );
};

export default App;
