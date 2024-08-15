import { useState } from "react"
import "./DatePicker.css"

function getMonthDays(year, month) {
    const result = [];

    // Créer une date avec le premier jour du mois
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0); // Dernier jour du mois

    // Obtenir le jour de la semaine (0 = dimanche, 1 = lundi, ..., 6 = samedi)
    let startDay = firstDayOfMonth.getDay(); // 0 pour dimanche, 1 pour lundi, etc.

    // Ajouter les jours du mois précédent si nécessaire pour compléter la première semaine
    for (let i = startDay; i > 0; i--) {
        const previousDay = new Date(year, month - 1, 1 - i);
        result.push({ day: previousDay.getDate(), month: previousDay.getMonth() + 1 });
    }

    // Ajouter les jours du mois en cours
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        result.push({ day: i, month: month });
    }

    // Ajouter les jours du mois suivant pour compléter la dernière semaine
    let remainingDays = 6 - lastDayOfMonth.getDay();
    for (let i = 1; i <= remainingDays; i++) {
        const nextDay = new Date(year, month, i);
        result.push({ day: nextDay.getDate(), month: nextDay.getMonth() + 1 });
    }

    return result;
}

export default function DatePicker({id, name}) {

    //Build calendar : need to get last day or/and next day for finish the month 
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Init display of component to false
 
    const [display, setDisplay] = useState(false)

    const [date, setDate] = useState(new Date())
    
    const [day, setDay] = useState(date.getDate())
    const [month, setMonth] = useState(date.getMonth() + 1)
    const [year, setYear] = useState(date.getFullYear())

    const days = getMonthDays(year, month)
    console.log(date)
    console.log(days)
    console.log(day)
    console.log(month)
    console.log(year)



    //Manage Focus and blur on input
    const handleInputFocus = () => {
        setDisplay(true)
    }
    const handleInputBlur = () => {
        setDisplay(false)
    }

    return <>
        {
            display ? 
                <> 
                    <label htmlFor={id}>{name}</label>
                    <input type="text" id={id} className="" onFocus={handleInputFocus} onBlur={handleInputBlur}  />

                    <div className="modalDatePicker">
                        <div className="calendar__header">
                            <div className="calendar__header">
                                <i class="fa-solid fa-caret-left"></i>
                                <i class="fa-solid fa-house"></i>
                                {monthNames[month-1] + " " + year} 
                                <i class="fa-solid fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="calendar-grid">
                            {
                                days.map((d, index) => (
                                    <div 
                                        key={index} 
                                        className={
                                            d.day === day 
                                            ? "calendar__day-selected" 
                                            : d.month === month 
                                                ? "calendar__day" 
                                                : "calendar__day-grey"
                                        }
                                    >
                                        <span className="text-opacity">{d.day}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            :
                <> 
                    <label htmlFor={id}>{name}</label>
                    <input type="text" id={id} className="" onFocus={handleInputFocus} onBlur={handleInputBlur}  />
                </>
        }
        
    </>
}