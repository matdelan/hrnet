import { create } from 'zustand';

// Définir le store avec Zustand
const useEmployeeStore = create((set) => ({
  employee: {
    id: '',
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
}));

export default useEmployeeStore