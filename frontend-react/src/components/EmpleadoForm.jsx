import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useStore from "../stores/useStore";
import SelectEdad from "./SelectEdad";
import axios from "axios";
import SelectCargo from "./SelectCargo";

const EmpleadoForm = ({ empleado }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const addEmpleado = useStore((state) => state.addEmpleado);
  const updateEmpleado = useStore((state) => state.updateEmpleado);

  useEffect(() => {
    if (empleado) {
      setValue("id", empleado.id);
      setValue("nombre", empleado.nombre);
      setValue("cedula", empleado.cedula);
      setValue("telefono", empleado.telefono);
      setValue("sexo", empleado.sexo);
    }
  }, [empleado, setValue]);

  const onSubmit = async (data) => {
    let urlapi = "http://127.0.0.1:8000/api/empleados";
    if (empleado) {
      const response = await axios.put(`${urlapi}/${empleado.id}`, data);
      updateEmpleado(response.data);
    } else {
      const response = await axios.post(urlapi, data);
      addEmpleado(response.data);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST" encType="multipart/form-data">
      {empleado && <input type="hidden" {...register("id")} />}
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" {...register("nombre", { required: true })} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Cédula (NIT)</label>
        <input type="number" {...register("cedula", { required: true })} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          type="number"
          {...register("telefono", { required: true })}
          className="form-control"
        />
      </div>

      <div className="row">
        <div className="col-md-6">
          <label className="form-label">Seleccione la edad</label>
          <SelectEdad register={register} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Sexo</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("sexo", { required: true })}
              value="masculino"
            />
            <label className="form-check-label">Masculino</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("sexo", { required: true })}
              value="femenino"
            />
            <label className="form-check-label">Femenino</label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Seleccione el Cargo</label>
        <SelectCargo register={register} />
      </div>
      <div className="mb-3">
        <label className="form-label">Foto</label>
        <input
          type="file"
          {...register("avatar", { required: !empleado })}
          className="form-control"
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn_add">
          Registrar Empleado
        </button>
      </div>
    </form>
  );
};

export default EmpleadoForm;
