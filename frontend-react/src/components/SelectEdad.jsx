const SelectEdad = ({ register }) => (
  <select className="form-select" {...register("edad", { required: true })} required>
    <option value="">Seleccione la Edad</option>
    {Array.from({ length: 33 }, (_, i) => (
      <option key={i} value={i + 18}>
        {i + 18}
      </option>
    ))}
  </select>
);

export default SelectEdad;
