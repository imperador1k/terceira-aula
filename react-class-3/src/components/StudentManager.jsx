import Student from "./Student";

function StudentManager() {

    // Data could be from a API/DataBase
    const listStudents = [
        { name: 'Paulo', age: 20 },
        { name: 'Diogo', age: 19 },
        { name: 'Test', age: 0 }
    ];

    // variable that will contain HTML that we will show in the screen
    let listStudentsHtml = [];

    // for each element of listStudents, we will create a Student
    listStudents.forEach((student) => {
        listStudentsHtml.push(
            <>
                <br />
                <Student name={student.name} age={student.age} />
                <br />
            </>
        );
    });

    return (
        <>
        <hr />
        {listStudentsHtml}
        <hr />
        </>
    );
}

export default StudentManager;