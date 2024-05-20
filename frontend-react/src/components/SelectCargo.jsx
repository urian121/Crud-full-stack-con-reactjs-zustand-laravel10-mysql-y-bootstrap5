const SelectCargo = ({ register }) => {
  const cargos = [
    "Gerente",
    "Asistente",
    "Analista",
    "Contador",
    "Secretario",
    "Desarrollador Web",
    "Desarrollador FrontEnd",
    "Desarrollador BackEnd",
  ];

  return (
    <select
      {...register("cargo", { required: true })}
      className="form-select"
      required>
      <option value="">Seleccione el Cargo</option>
      {cargos.map((cargo, index) => (
        <option key={index} value={cargo}>
          {cargo}
        </option>
      ))}
    </select>
  );
};

export default SelectCargo;
