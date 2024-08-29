import React, { useState, useEffect } from 'react';

export default function ShowEmployees({ employees }) {
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        setSortedEmployees(employees);
    }, [employees]);

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedData = [...sortedEmployees].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setSortedEmployees(sortedData);
        setSortConfig({ key, direction });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sortData('firstname')}>First Name</th>
                    <th onClick={() => sortData('lastname')}>Last Name</th>
                    <th onClick={() => sortData('dateBirthday')}>Date of Birth</th>
                    <th onClick={() => sortData('dateStart')}>Start Date</th>
                    <th onClick={() => sortData('departement')}>Department</th>
                    <th onClick={() => sortData('street')}>Street</th>
                    <th onClick={() => sortData('city')}>City</th>
                    <th onClick={() => sortData('state')}>State</th>
                    <th onClick={() => sortData('zipCode')}>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {sortedEmployees.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.dateBirthday}</td>
                        <td>{employee.dateStart}</td>
                        <td>{employee.departement}</td>
                        <td>{employee.street}</td>
                        <td>{employee.city}</td>
                        <td>{employee.state}</td>
                        <td>{employee.zipCode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
