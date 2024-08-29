import { create } from 'zustand';

// Définir le store avec Zustand
const useEmployeeStore = create((set) => ({
  employee: {
    firstname: '',
    lastname: '',
    dateBirthday: '',
    dateStart: '',
    departement: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  setEmployee: (newEmployee) => set({ employee: newEmployee }),
  updateEmployee: (key, value) =>
    set((state) => ({
      employee: {
        ...state.employee,
        [key]: value,
      },
    })),
}));

export default useEmployeeStore