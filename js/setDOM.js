document.body.innerHTML = `
<div class="title">
        <div class="header">
            <a href="https://www.udemy.com/home/my-courses/learning/?sort=-enroll_time" target="_blank" rel="noopener noreferrer">
                <span id="link1">Check My Enroll Courses</span>
            </a>
            <a id="latest" href="https://www.udemy.com/home/my-courses/learning/?sort=-enroll_time" target="_blank" rel="noopener noreferrer">
                <span id="link2">Public Profile</span>
            </a>
        </div>
        <div class="header">
            <h4>
                <span><span id="current"></span> Courses? from total <span id="countcourses"></span> Courses <span id="countInstructor"></span> Instructors</span>
            </h4>
        </div>
        <div class="keywords">
        </div>
        <div class="searchDiv">
            <input type="text" id="searchFilter" placeholder="CourseName / InstructorName / Keyword / CourseId" autofocus>
        </div>
    </div>
    <div class="container" id="courses">

    </div>`