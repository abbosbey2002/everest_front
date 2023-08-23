import React, {useState} from 'react'

function CourseAdd() {


    const [id_branch, setId_branch] = useState();
    const [course_type, setCourse_type] = useState();
    const [course_level, setCourse_level] = useState();
    const [id_group, setId_group] = useState();
    const [id_teacher, setId_teacher] = useState();
    const [id_student, setId_studentd] = useState();
    const [state_payment, setState_payment] = useState();
    const [s_date, setS_date] = useState();
    const [e_date, setE_date] = useState();
    const [state, setState] = useState();

    const savecourse = () => {
        console.log({
            id_branch,
            course_level,
            course_type,
            id_group,
            id_teacher,
            id_student,
            state_payment,
            s_date,
            e_date,
            state
        })

        fetch("https://everest-back.na4u.ru/api/courses", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(
                {
                    id_branch,
                    course_level,
                    course_type,
                    id_group,
                    id_teacher,
                    id_student,
                    state_payment,
                    s_date,
                    e_date,
                    state
                }
            )
        }).then(res => res.json())
        .then(res => {
            if(res.operationResult.result == 0){
                alert("maydonlarni to`g`ri kiriting")
            }
            else if(res.operationResult.result == 1){
                alert('success')
                window.location.reload();
            }
        })

    }


    return (

        <section className="section">
            <div className="card p-3 row">
                <div>
                    <label htmlFor="id_branch">id_branch</label>
                    <input type="number" id='id_branch' className='form-control'
                        onChange={
                            (e) => setId_branch(e.target.value)
                        }/>
                </div>
                <div>
                    <label htmlFor="course_level">course_level</label>
                    <input type="text" id='course_level' className='form-control'
                        onChange={
                            (e) => setCourse_level(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="course_type">course_type</label>
                    <input type="text" id='course_type' className='form-control'
                        onChange={
                            (e) => setCourse_type(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="id_group">id_group</label>
                    <input type="text" id='id_group' className='form-control'
                        onChange={
                            (e) => setId_group(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="id_teacher">id_teacher</label>
                    <input type="number" id='id_teacher' className='form-control'
                        onChange={
                            (e) => setId_teacher(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="id_student">id_student</label>
                    <input type="number" id='id_student' className='form-control'
                        onChange={
                            (e) => setId_studentd(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="state_payment">state_payment</label>
                    <input type="text" id='state_payment' className='form-control'
                        onChange={
                            (e) => setState_payment(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="s_date">start_date</label>
                    <input type="date" id='s_date' className='form-control'
                        onChange={
                            (e) => setS_date(e.target.value)
                        }/>
                </div>

                <div>
                    <label htmlFor="e_date">end date</label>
                    <input type="date" id='e_date' className='form-control'
                        onChange={
                            (e) => setE_date(e.target.value)
                        }/>
                </div>


                <div>
                    <label htmlFor="e_date">
                        state</label>
                    <input type="number" id='state' className='form-control'
                        onChange={
                            (e) => setState(e.target.value)
                        }/>
                </div>


                <div className='m-2'>
                    <button onClick={savecourse}
                        className='btn btn-success'>Save</button>
                </div>
            </div>
        </section>
    )
}

export default CourseAdd
