export default function Message({title, children}) {
    return (
        <>
            <h3>{title}</h3>
            {children}
        </>
    )
}