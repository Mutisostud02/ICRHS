export function HomeOne({title, content, extraContent, src}) {
    return (
        <div className="group1">
            <img src={src}/>
            <h4>{title}</h4>
            <p>{content}</p>
            {extraContent && <p>{extraContent}</p>}
        </div>
    )
}

export function HomeTwo({title, content, stylez, goal}) {
    return (
        <div className="group2">
                <span></span>
            <div style={stylez}>
                <button>Donate+</button>
                <span></span>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{goal}</p>
            
        </div>

    )
}

export function HomeThree({src, size, title, content, stylz}) {
    return (
        <div className="group3">
            <img src={src}
            height={size}
            />
            <div className="group3-info">
            <h3>{title}</h3>
            <p>{content}</p>
            </div>
        </div>
    )
}