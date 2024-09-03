import { useState, useEffect } from 'react';
import './listEmployees.css'
import ShowEmployees from '../../component/showemployees/ShowEmployees';

export default function ListEmployees() {
    
    const API_EMPLOYEE_BASE_URL = "http://hrnetbackend.test/api/employee"
    const [employeeData, setEmployeeData] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const dataListEmployee = async() => {
                try {
                    const response = await fetch(API_EMPLOYEE_BASE_URL, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    if (response.ok) {
                        const employeeDataResponse = await response.json()
                        switch (employeeDataResponse.status) {
                            case 400:
                                setErrorMessage("Invalid Fiels")
                                break
                            case 500:
                                setErrorMessage("Internal Server Error")
                                break
                            case 200:
                                setEmployeeData(employeeDataResponse.data)
                                break
                            default:
                                setErrorMessage(employeeDataResponse.status + 'Please log in')
                                navigate('/signin')
                                break
                        }
                    } else {
                        setErrorMessage('Data not found')
                    }
                } catch (error) {
                    setErrorMessage("fetch doesn't work")
                    console.error(error)
                }
        }
        dataListEmployee()
    }, [ API_EMPLOYEE_BASE_URL])

    return <>
        {errorMessage && <p>{errorMessage}</p>}
        <ShowEmployees employees={employeeData} />
    </>

}