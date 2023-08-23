import React from "react";
import CourseAdd from "./course/CourseAdd";
import CourseList from "./course/CourseList";

function Course() {
    return (

        <section className="section">

          <CourseAdd />

          <CourseList />
        </section>

    )
}

export default Course;
