import { useEffect } from "react";
import useStore from "../stores/useStore";
import axios from "axios";

const EmpleadoList = () => {
  const empleados = useStore((state) => state.empleados);
  const setEmpleados = useStore((state) => state.setEmpleados);
  const deleteEmpleado = useStore((state) => state.deleteEmpleado);

  let urlapi = "http://127.0.0.1:8000/api/empleados";
  const avatarUrl = "http://127.0.0.1:8000/avatars/";

  useEffect(() => {
    const fetchEmpleados = async () => {
      const response = await axios.get(urlapi);
      setEmpleados(response.data);
    };
    fetchEmpleados();
  }, [setEmpleados, urlapi]);

  const handleDelete = async (id) => {
    await axios.delete(`${urlapi}/${id}`);
    deleteEmpleado(id);
  };

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Cedula</th>
              <th scope="col">Sexo</th>
              <th scope="col">Cargo</th>
              <th scope="col">Avatar</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.nombre}</td>
                <td>{empleado.edad}</td>
                <td>{empleado.cedula}</td>
                <td>{empleado.sexo}</td>
                <td>{empleado.cargo}</td>
                <td>
                  {empleado.avatar ? (
                    <img
                      src={`${avatarUrl}/${empleado.avatar}`}
                      alt={empleado.avatar}
                      width="50"
                      height="50"
                    />
                  ) : (
                    "Sin Avatar"
                  )}
                </td>
                <td>
                  <ul className="flex_acciones">
                    <li>
                      <span
                        title={`Detalles del empleado ${empleado.nombre}`}
                        className="btn btn-success">
                        <i className="bi bi-binoculars"></i>
                      </span>
                    </li>
                    <li className="px-2">
                      <span
                        title={`Editar datos del empleado ${empleado.nombre}`}
                        className="btn btn-primary">
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </li>
                    <li>
                      <button
                        title={`Borrar empleado ${empleado.nombre}`}
                        onClick={() => handleDelete(empleado.id)}
                        className="btn btn-danger"
                        type="button">
                        <i className="bi bi-trash3"></i>
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpleadoList;
