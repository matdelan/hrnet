import './input.css'

/**
 * Return an input field
 * 
 * @param {Object} props - The properties passed to the Dropdown component.
 * @param {Array} props.id - id of the input
 * @param {string} props.label - The label text for the input.
 * @param {React.RefObject} props.inputRef - The reference object for the select input element.
 * @param {React.RefObject} props.errorRef - The optional reference object for handling errors.
 * @returns {React.Component} A React component rendering a input field.
 */
export default function Input({id, content, name, inputRef, errorRef}) {
    return <>
        <label htmlFor={id}>{content}</label>
        <input className="input__style" type="text" id={id} name={name} ref={inputRef} autoComplete="on"/>
        <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
}