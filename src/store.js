import { create } from 'zustand';

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