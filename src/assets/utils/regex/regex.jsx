export const regexEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/
    return regex.test(email)
}

export const regexPassword = (password) => {
    const regex = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/ 
    return regex.test(password)
}

export const regexString = (string) => {
    const regex = /^(?=.*?[a-z]).{2,}$/ 
    return regex.test(string)
}

export const regexZipCode = (string) => {
    const regex = /^(?=.*?[0-9]).{5,}$/ 
    return regex.test(string)
}