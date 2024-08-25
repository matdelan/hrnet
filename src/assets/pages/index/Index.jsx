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


    const openModal = (event) => {

        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);
  
    const handleSelectStates = (value) => {
      //alert(`Vous avez sélectionné : ${value}`);
    };
    const handleSelectDepartements = (value) => {
        //alert(`Vous avez sélectionné : ${value}`);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const firstname = formData.get('inputFirstName')
        const lastname = formData.get('inputLastName')
        const dateBirthday = formData.get('inputDateBirthday')
        const dateStart = formData.get('inputDateStart')
        const addressStreet = formData.get('inputAddressStreet')
        const addressCity = formData.get('inputAddressCity')
        const addressStates = formData.get('selectState')
        const addressZC = formData.get('inputAddressZipCode')
        const departement = formData.get('selectDepartement')
        console.log(firstname + " " + lastname + " " + dateBirthday + " " + dateStart + " " + addressStreet + " " + addressCity + " " + addressZC +" " + addressStates + departement)
        openModal(event)
    }

    return (
        <>
        <div className="container">
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onSubmit={handleSubmit} className='container__body'>
                <div className="container__element">
                    <Input id="first-name" content="First Name" name="inputFirstName"/>
                    <Input id="last-name" content="Last Name" name="inputLastName"/>
                    <DatePickerHtml id="date-of-birth" content="Date of Birth" name="inputDateBirthday"/>
                    <DatePickerHtml id="start-date" content="Start Date" name="inputDateStart"/>
                    <Dropdown options={ departements } label="Departement" name="selectDepartement"/>
                </div>
                <div className='container__element'>
                <fieldset className="address">
                    <legend>Address</legend>
                    <Input id="street" content="Street" name="inputAddressStreet"/>
                    <Input id="city" content="City" name="inputAddressCity"/>
                    <Dropdown options={ states } label="State" name="selectState" />
                    <Input id="zip-code" content="Zip code" name="inputAddressZipCode"/>
                </fieldset>
                </div>
                <div className='container__element container__element-center'>
                    
                    <button >Save</button>
                </div>
                
                
            </form>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}> Employee Created!</Modal>

        </>
    )
}