import useEmployeeStore from '../../../store';
import './footer.css'

/**
 * Footer component : Show the footer
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
export default function Footer() {
    const { employee } = useEmployeeStore();

    return <>
        <footer className="footer">
        {(employee.firstname !== '') ? (
            <div>
            <p>First Name: {employee.firstname}</p>
            <p>Last Name: {employee.lastname}</p>
            <p>Date of Birth: {employee.dateBirthday}</p>
            <p>Start Date: {employee.dateStart}</p>
            <p>Department: {employee.departement}</p>
            <p>Street: {employee.street}</p>
            <p>City: {employee.city}</p>
            <p>State: {employee.state}</p>
            <p>Zip Code: {employee.zipCode}</p>
            </div>
        ) : (
            <p>No employee data available.</p>
        )}

        </footer>
    </>
}