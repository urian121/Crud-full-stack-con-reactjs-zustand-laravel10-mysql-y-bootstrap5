import { create } from "zustand";

const useStore = create((set) => ({
  empleados: [],
  setEmpleados: (empleados) => set({ empleados }),
  addEmpleado: (empleado) => set((state) => ({ empleados: [...state.empleados, empleado] })),
  updateEmpleado: (empleado) =>
    set((state) => ({
      empleados: state.empleados.map((e) => (e.id === empleado.id ? empleado : e)),
    })),
  deleteEmpleado: (id) =>
    set((state) => ({
      empleados: state.empleados.filter((e) => e.id !== id),
    })),
}));

export default useStore;
