const containerStyle={
    display: 'flex',
    justifyContent: 'space-between'
}



export default function TextExpander({children,textLimit,buttonColor,buttonContent}){

    const buttonStyle={
        backgroundColor: 'inherit',
        border: 'none',
        color: buttonColor
    }
    return (
        <div style={containerStyle}>
            <p>
            {children}
            <button style={buttonStyle}>{buttonContent}</button>
            </p>
        </div>
    )
}