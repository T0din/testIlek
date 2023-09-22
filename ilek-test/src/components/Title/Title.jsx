const styles = {
    marginLeft: '7px',
    marginBottom: '7px',
    fontSize: '20px',
    fontWeight: '700',
}

export const Title = ({title}) => {
    
    return (
        <div style={styles}>
            {title}
        </div>

    )
}