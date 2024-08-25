import './input.css'

export default function Input({id, content, name}) {
    return <>
        <label htmlFor={id}>{content}</label>
        <input className="input__style" type="text" id={id} name={name}/>
    </>
}