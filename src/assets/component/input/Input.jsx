export default function Input({id, name}) {
    return <>
        <label for={id}>{name}</label>
        <input type="text" id={id} />
    </>
}