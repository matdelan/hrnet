export default function Input({id, name}) {
    return <>
        <label htmlFor={id}>{name}</label>
        <input type="text" id={id} />
    </>
}