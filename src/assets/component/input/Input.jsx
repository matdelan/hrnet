import './input.css'

export default function Input({id, content, name, inputRef, errorRef}) {
    return <>
        <label htmlFor={id}>{content}</label>
        <input className="input__style" type="text" id={id} name={name} ref={inputRef}/>
        <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
}