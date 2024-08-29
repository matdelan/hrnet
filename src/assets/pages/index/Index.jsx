import { useState, useRef, useEffect } from 'react'
import Input from "../../component/input/Input"
import DatePicker from '../../component/datepicker/DatePicker'
import Modal from '../../component/modal/Modal'
import Dropdown from '../../component/dropdown/Dropdown'
import DatePickerHtml from '../../component/datePickerHtml/DatePickerHtml'
import { states } from '../../data/states'
import { departements } from '../../data/departements'
import { regexString, regexZipCode } from '../../utils/regex/regex'
import './index.css'
import { checkValue } from '../../utils/checkValue'
import { NavLink } from 'react-router-dom'
import useEmployeeStore from '../../../store'

/**
 * Home page : Show home page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
export default function index() {
    const API_EMPLOYEE_BASE_URL = "http://hrnetbackend.test/api/employee"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const openModal = (event) => {
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    const { employee, setEmployee } = useEmployeeStore();

    const inputFirstNameRef = useRef(null)
    const errorFirstNameRef = useRef(null)
    const inputLastNameRef = useRef(null)
    const errorLastNameRef = useRef(null)
    const inputDateBirthdayRef = useRef(null)
    const errorDateBirthdayRef = useRef(null)
    const inputDateStartRef = useRef(null)
    const errorDateStartRef = useRef(null)
    const inputStreetRef = useRef(null)
    const errorStreetRef = useRef(null)
    const inputCityRef = useRef(null)
    const errorCityRef = useRef(null)
    const inputStateRef = useRef(null)
    const errorStateRef = useRef(null)
    const inputZipCodeRef = useRef(null)
    const errorZipCodeRef = useRef(null)
    const inputDepartementRef = useRef(null)
    const errorDepartementRef = useRef(null)
  
    const handleSubmit = async(event) => {
        event.preventDefault()

        //Gestion des erreurs individuel
        checkValue(inputFirstNameRef, errorFirstNameRef)
        checkValue(inputLastNameRef, errorLastNameRef)
        checkValue(inputDateBirthdayRef, errorDateBirthdayRef)
        checkValue(inputDateStartRef, errorDateStartRef)
        checkValue(inputStreetRef, errorStreetRef)
        checkValue(inputCityRef, errorCityRef)
        checkValue(inputStateRef, errorStateRef)
        checkValue(inputZipCodeRef, errorZipCodeRef)
        checkValue(inputDepartementRef, errorDepartementRef)
        
        //Gestion des erreurs Globales
        if((regexString(inputFirstNameRef.current.value)) &&
            (regexString(inputLastNameRef.current.value)) &&
            (regexString(inputCityRef.current.value)) &&
            (regexString(inputStreetRef.current.value)) &&
            (regexZipCode(inputZipCodeRef.current.value)) &&
            (inputDateBirthdayRef.current.value !== '') &&
            (inputDateStartRef.current.value !== '') &&
            (inputDepartementRef.current.value !== '') &&
            (inputStateRef.current.value !== '') 
        ) {
            try {
                const response = await fetch(API_EMPLOYEE_BASE_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ 
                        firstname: inputFirstNameRef.current.value,
                        lastname: inputLastNameRef.current.value,
                        dateBirthday: inputDateBirthdayRef.current.value,
                        dateStart: inputDateStartRef.current.value,
                        departement: inputDepartementRef.current.value,
                        street: inputStreetRef.current.value,
                        city: inputCityRef.current.value,
                        state: inputStateRef.current.value,
                        zipCode: inputZipCodeRef.current.value
                    })
                })
                if (response.ok) {
                    const apiEmployeeResponse = await response.json()
                    switch (apiEmployeeResponse.status) {
                        case 400:
                            setErrorMessage("Invalid Fiels")
                            break
                        case 406:
                            setErrorMessage("Not Acceptable")
                            break
                        case 500:
                            setErrorMessage("Internal Server Error")
                            break
                        case 200:
                            //dispatch(editUserName(apiEmployeResponse.body))
                            //setDisplay(true)
                            
                            console.log(apiEmployeeResponse.data)
                            setEmployee(apiEmployeeResponse.data)
                            openModal(event)
                            break
                        default:
                            setErrorMessage('Unkwon error')
                            break
                    }
                } else {
                    setErrorMessage('An error occurred. Please try again.');
                }
        } catch (error) {
            console.error(error)
        }

        } 
            
    }


    return (
        <>
        <div className="container">
            <NavLink to='listEmployees'>View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onSubmit={handleSubmit} className='container__body'>
                <div className="container__element">
                    <Input id="first-name" content="First Name" name="inputFirstName" inputRef={inputFirstNameRef} errorRef={errorFirstNameRef}/>
                    <Input id="last-name" content="Last Name" name="inputLastName" inputRef={inputLastNameRef} errorRef={errorLastNameRef}/>
                    <DatePickerHtml id="date-of-birth" content="Date of Birth" name="inputDateBirthday" inputRef={inputDateBirthdayRef} errorRef={errorDateBirthdayRef}/>
                    <DatePickerHtml id="start-date" content="Start Date" name="inputDateStart" inputRef={inputDateStartRef} errorRef={errorDateStartRef}/>
                    <Dropdown options={ departements } label="Departement" name="selectDepartement" inputRef={inputDepartementRef} errorRef={errorDepartementRef}/>
                </div>
                <div className='container__element'>
                <fieldset className="address">
                    <legend>Address</legend>
                    <Input id="street" content="Street" name="inputStreet" inputRef={inputStreetRef} errorRef={errorStreetRef}/>
                    <Input id="city" content="City" name="inputCity" inputRef={inputCityRef} errorRef={errorCityRef}/>
                    <Dropdown options={ states } label="State" name="selectState" inputRef={inputStateRef} errorRef={errorStateRef}/>
                    <Input id="zip-code" content="Zip code" name="inputZipCode" inputRef={inputZipCodeRef} errorRef={errorZipCodeRef}/>
                </fieldset>
                </div>
                <div className='container__element container__element-center'>
                    <div>{errorMessage}</div>
                    <button>Save</button>
                </div>
                
                
            </form>
            
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}> Employee Created!</Modal>

        </>
    )
}