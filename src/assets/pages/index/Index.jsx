import { useState } from 'react'
import Input from "../../component/input/Input"
import DatePicker from '../../component/datepicker/DatePicker'
import Modal from '../../component/modal/Modal'
import Dropdown from '../../component/dropdown/Dropdown'
import DatePickerHtml from '../../component/datePickerHtml/DatePickerHtml'
import { states } from '../../data/states'
import { departements } from '../../data/departements'
import './index.css'

/**
 * Home page : Show home page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
export default function index() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    const handleSelect = (value) => {
      //alert(`Vous avez sélectionné : ${value}`);
    };

    return (
        <>
        <div class="container">
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
        
            <Input id="first-name" name="First Name"/>
            <Input id="last-name" name="Last Name"/>

            <DatePicker id="date-of-birth" name="Date of Birth"/>
            <br/>

            <label for="start-date">Start Date</label>
            <input id="start-date" type="text" />

            <fieldset class="address">
                <legend>Address</legend>
                <label for="street">Street</label>
                <input id="street" type="text" />

                <label for="city">City</label>
                <input id="city" type="text" />

                <label for="state">State</label>
                <select name="state" id="state"></select>

                <Dropdown options={ states } label="State" onSelect={handleSelect}/>

                <label for="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>

            <Dropdown options={ departements } label="Departement"/>
            <label for="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            </form>
        </div>

        <div className="App">
            <button onClick={openModal}>Save</button>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            Employee Created!
            </Modal>
        </div>
        </>
    )
}