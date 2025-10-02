function Student({ name = 'default', age = 23 }) {
    return (
        <>
            Hello Student {name} that is {age} years old
        </>
    );
}

export default Student