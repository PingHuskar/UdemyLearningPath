const target = "_blank"
const imagesRegex = /(?<=srcset="https:\/\/img-.\.udemycdn\.com\/course\/240x135\/).+?(?=\.jpg)/g;
const courseIdNameRegex = /(?<=course_id=\d+">).+?(?=<)/g
const instructorRegex = /(?<=instructors">).+?(?=<)/g

const imagesSrc = [...data.matchAll(imagesRegex)];
const courseIdName = [...data.matchAll(courseIdNameRegex)];
const instructor = [...data.matchAll(instructorRegex)];
console.log(imagesSrc.length,courseIdName.length,instructor.length)
var datalist = []
for (var i = 0; i<imagesSrc.length; i++) {
  datalist.push([imagesSrc[i][0],courseIdName[i][0],/^\d+/.exec(imagesSrc[i][0])[0],instructor[i][0]])
}
console.log(datalist)
const searchParam = new URLSearchParams(location.search)
const limit = searchParam.get('limit') || datalist.length
document.getElementById("courses").innerHTML = ""
for (var i = 0; i< limit;i++) {
document.getElementById("courses").innerHTML +=
`<figure class="snip1579"><img src="https://img-c.udemycdn.com/course/240x135/${datalist[i][0]}.jpg" alt="${datalist[i][1]}"/>
<figcaption>
  <h4>${datalist[i][1]}</h4>
  <h5>${datalist[i][3]}</h5>
</figcaption><a href="https://www.udemy.com/course-dashboard-redirect/?course_id=${datalist[i][2]}" target=${target}></a>
</figure>`
}