import { regexString, regexZipCode } from "./regex/regex"

/**
 * Check the value of input and manage error message
 * @param {*useRef of input} inputRef 
 * @param {*useRef of error} errorRef 
 */
export const checkValue = (inputRef, errorRef) => {
    
    if(inputRef.current.value === '') {
        inputRef.current.classList.add('alert')
        errorRef.current.textContent = "Ce champ est requis."
        errorRef.current.setAttribute("data-error-visible", "true")
    } else {
        switch (inputRef.current.name) {
            case "inputFirstName":
            case "inputLastName":
            case "inputCity":
            case "inputStreet":
                if(!regexString(inputRef.current.value))
                {
                    inputRef.current.classList.add('alert')
                    errorRef.current.textContent = "Il faut au minimum deux caractères"
                    errorRef.current.setAttribute("data-error-visible", "true")
                } else {
                    inputRef.current.classList.remove('alert')
                    errorRef.current.textContent = ""
                    errorRef.current.setAttribute("data-error-visible", "false")
                } 
                break

            case "inputDateBirthday":
            case "inputDateStart":
            case "selectDepartement":
            case "selectState":
                console.log('Checking input:', inputRef.current.name, 'Value:', inputRef.current.value)
                inputRef.current.classList.remove('alert')
                errorRef.current.textContent = ""
                errorRef.current.setAttribute("data-error-visible", "false")
                break
            case "inputZipCode":
                if(!regexZipCode(inputRef.current.value))
                {
                    inputRef.current.classList.add('alert')
                    errorRef.current.textContent = "At least five digits are required."
                    errorRef.current.setAttribute("data-error-visible", "true")
                } else {
                    inputRef.current.classList.remove('alert')
                    errorRef.current.textContent = ""
                    errorRef.current.setAttribute("data-error-visible", "false")
                } 
                break

            default:
                break;
        }

    } 
}