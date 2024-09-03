import React, { useState, useEffect, useRef } from 'react';
import Input from '../input/Input'

export default function ShowEmployees({ employees }) {
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const inputSearchRef = useRef(null)
    const errorSearchRef = useRef(null)
    const numElementsRef = useRef(0)

    /* Construct table */
    const [currentLine, setCurrentLine] = useState(0)
    //const [numLine,setNumLine] = useState(10)
    //Utiliser la ref
    const [currentPage, setCurrentPage] = useState(1)
    const [numPage, setNumPage] = useState(0)

    /*
    setNumPage(numLine/numPage)
    */

    useEffect(() => {
        setSortedEmployees(employees);
        //fct de Trie sur le champ recherche
        //Calculer le nb de ligne sur le tableau
        //Calculer le nb de page et placer le current à 1
        //afficher la nextLine-1 & currentLine du tableau
        //afficher lien avec le nombre de page
        //si changement de page -> afficher les lines current = page*numLine
    }, [employees]);

    const updateSearch = () => {
        //alert("ok")
        sortData(sortConfig)
    }
    const updateTable = () => {
        //elementsPerPage = parseInt(document.getElementById("elementsPerPage").value);
        setCurrentPage(1)
        sortData(sortConfig)
        /*renderTable();
        renderPagination();*/
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
        setCurrentLine((page*(numElementsRef.current.value)-numElementsRef.current.value))
        sortData(sortConfig)
    };

    const renderPagination = () => {
        const pages = []
        const totalPages = Math.ceil(sortedEmployees.length / numElementsRef.current.value)
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={i === currentPage ? 'active' : ''}
            >
              {i}
            </button>
          )
        }
    
        return <div>{pages}</div>
      }

    const sortData = (key, direction) => {
        const searchTerm = inputSearchRef.current.value.toLowerCase();
        const filteredEmployees = employees.filter((item) =>
            Object.values(item).some((data) => {
                return String(data).toLowerCase().includes(searchTerm)
            })
        )
    
        const sortedData = [...filteredEmployees].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1
            }
            return 0
        })
    
        setSortedEmployees(sortedData);
        setSortConfig({ key, direction })
    };

    return (
        <>
        <div>
            <div>
                <label htmlFor="elementsPage">Éléments par page : </label>
                <select id="elementsPage" onChange={updateTable} ref={numElementsRef}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
  
        <label htmlFor="search">Search</label>
        <input type="text" id="search" ref={inputSearchRef} onChange={updateSearch}/>
        <table>
            <thead>
                <tr>
                    <th><p>First Name</p><div><i className="fa-solid fa-caret-up" onClick={() => sortData('firstname','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('firstname','descending')}></i></div></th>
                    <th>Last Name<div><i className="fa-solid fa-caret-up" onClick={() => sortData('lastname','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('lastname','descending')}></i></div></th>
                    <th>Date of Birth<div><i className="fa-solid fa-caret-up" onClick={() => sortData('dateBirthday','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('dateBirthday','descending')}></i></div></th>
                    <th>Start Date<div><i className="fa-solid fa-caret-up" onClick={() => sortData('dateStart','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('dateStart','descending')}></i></div></th>
                    <th>Department<div><i className="fa-solid fa-caret-up" onClick={() => sortData('departement','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('departement','descending')}></i></div></th>
                    <th>Street<div><i className="fa-solid fa-caret-up" onClick={() => sortData('street','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('street','descending')}></i></div></th>
                    <th>City<div> <i className="fa-solid fa-caret-up" onClick={() => sortData('city','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('city','descending')}></i></div></th>
                    <th>State<div><i className="fa-solid fa-caret-up" onClick={() => sortData('state','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('state','descending')}></i></div></th>
                    <th>Zip Code<div><i className="fa-solid fa-caret-up" onClick={() => sortData('zipCode','ascending')}></i><i className="fa-solid fa-caret-down" onClick={() => sortData('zipCode','descending')}></i></div></th>
                </tr>
            </thead>
            <tbody>
                {sortedEmployees.slice(currentLine,(currentLine+numElementsRef.current.value)).map((employee, index) => (
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
        {renderPagination()}
        </>
    );
}
