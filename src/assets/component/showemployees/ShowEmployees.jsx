import React, { useState, useEffect, useRef } from 'react';
import Input from '../input/Input'
import './ShowEmployees.css'

export default function ShowEmployees({ employees }) {
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const inputSearchRef = useRef(null)
    const errorSearchRef = useRef(null)
    const numElementsRef = useRef(0)

    /* Construct table */
    const [currentLine, setCurrentLine] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [numPage, setNumPage] = useState(0)

    useEffect(() => {
        setSortedEmployees(employees);
    }, [employees]);

    const updateSearch = () => {
        sortData(sortConfig)
    }
    const updateTable = () => {
        setCurrentPage(1)
        setCurrentLine(0)
        sortData(sortConfig)
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
        setCurrentLine((page*(numElementsRef.current.value)-numElementsRef.current.value))
        sortData(sortConfig)
    };

    const handlePreviousPage = () => {
        const prevPage = currentPage - 1
        if(prevPage !== 0)
        {
            setCurrentPage(prevPage)
            setCurrentLine((prevPage*(numElementsRef.current.value)-numElementsRef.current.value))
            sortData(sortConfig)
        }
            
    }
    const handleNextPage = () => {
        const nextPage = currentPage + 1
        if(nextPage !== (Math.ceil(sortedEmployees.length / numElementsRef.current.value)+1))
        {
            setCurrentPage(nextPage)
            setCurrentLine((nextPage*(numElementsRef.current.value)-numElementsRef.current.value))
            sortData(sortConfig)
        }    
    }
    const renderPagination = () => {
        const pages = []
        const totalPages = Math.ceil(sortedEmployees.length / numElementsRef.current.value)
        pages.push(<div onClick={handlePreviousPage} className='table__pagination-space'>Previous</div>)
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={i === currentPage ? 'activePage' : ''}
            >
              {i}
            </button>
          )
        }
        pages.push(<div onClick={handleNextPage} className='table__pagination-space'>Next</div>)
    
        let maxElem = (currentLine+parseInt(numElementsRef.current.value))
        if (maxElem > sortedEmployees.length)
            maxElem = sortedEmployees.length
        return <>
            <div className='table__footer'>
                <div> Showing {currentLine+1} of {maxElem} of {sortedEmployees.length}  </div>
                <div className='table__pagination'>{pages}</div>
            </div>
        </> 
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
        <div className='table__header'>
            <div className='table__header-elem'>
                <label htmlFor="elementsPage">Éléments par page : </label>
                <select id="elementsPage" onChange={updateTable} ref={numElementsRef}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className='table__header-elem'>
                <label htmlFor="search">Search :</label>
                <input type="text" id="search" ref={inputSearchRef} onChange={updateSearch}/>
            </div>
        </div>
        <table>
            <thead>
                <tr className='table__col-gen'>
                    <th><div className='table__col'>First Name<span className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('firstname','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('firstname','descending')}></i></span></div></th>
                    <th><div className='table__col'>Last Name<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('lastname','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('lastname','descending')}></i></div></div></th>
                    <th><div className='table__col'>Date of Birth<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('dateBirthday','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('dateBirthday','descending')}></i></div></div></th>
                    <th><div className='table__col'>Start Date<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('dateStart','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('dateStart','descending')}></i></div></div></th>
                    <th><div className='table__col'>Department<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('departement','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('departement','descending')}></i></div></div></th>
                    <th><div className='table__col'>Street<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('street','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('street','descending')}></i></div></div></th>
                    <th><div className='table__col'>City<div className='table__col-block'> <i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('city','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('city','descending')}></i></div></div></th>
                    <th><div className='table__col'>State<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('state','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('state','descending')}></i></div></div></th>
                    <th><div className='table__col'>Zip Code<div className='table__col-block'><i className="fa-solid fa-caret-up table__col-arrow" onClick={() => sortData('zipCode','ascending')}></i><i className="fa-solid fa-caret-down table__col-arrow" onClick={() => sortData('zipCode','descending')}></i></div></div></th>
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
