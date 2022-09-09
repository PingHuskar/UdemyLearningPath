const searchParam = new URLSearchParams(location.search)
const target = "_blank"
const imagesRegex = /(?<=srcset="https:\/\/img-.\.udemycdn\.com\/course\/240x135\/).+?(?=\.jpg)/g;
const courseIdNameRegex = /(?<=course_id=\d+">).+?(?=<)/g
const instructorRegex = /(?<=instructors">).+?(?=<)/g

const imagesSrc0 = [...data.matchAll(imagesRegex)];
const imagesSrcLength = imagesSrc0.length
const last = searchParam.get('last') || imagesSrcLength
const imagesSrc = imagesSrc0.slice(imagesSrcLength-parseInt(last),imagesSrcLength);
const courseIdName = [...data.matchAll(courseIdNameRegex)].slice(imagesSrcLength-parseInt(last),imagesSrcLength);
const instructor = [...data.matchAll(instructorRegex)].slice(imagesSrcLength-parseInt(last),imagesSrcLength);
// console.log(instructor.flat())

var datalist = []

for (var i = 0; i<imagesSrc.length; i++) {
  datalist.push([imagesSrc[i][0],courseIdName[i][0],/^\d+/.exec(imagesSrc[i][0])[0],instructor[i][0]])
}
console.log(datalist)
console.log(datalist.length)
document.getElementById('countcourses').innerText = datalist.length

const limit = searchParam.get('limit') || datalist.length
document.getElementById("courses").innerHTML = ""
for (var i = 0; i< limit;i++) {
document.getElementById("courses").innerHTML +=
`<figure class="snip1579 ${datalist[i][3].replace(/[\s]/g,"").replace(","," ")}"><img src="https://img-c.udemycdn.com/course/240x135/${datalist[i][0]}.jpg" alt="${datalist[i][1]}"/>
<figcaption>
  <h4>${datalist[i][1]}</h4>
  <h5>${datalist[i][3]}</h5>
  <h6>${datalist[i][2]}</h6>
</figcaption><a href="https://www.udemy.com/course-dashboard-redirect/?course_id=${datalist[i][2]}" target=${target}></a>
</figure>`
}

const b = document.getElementsByClassName('snip1579')

const filterButton = document.getElementById('filter')
const Filter = () => {
  // e.preventDefault()
  const filterValue = document.getElementById('searchFilter').value
  // console.log(filterValue)
  var c = 0
  for (var i = 0; i < b.length; i++) {
    // console.log(b[i].innerText)
    if (b[i].innerText.toLowerCase().includes(filterValue.toLowerCase())) {
      b[i].classList.add('show')
      b[i].classList.remove('hide')
      c += 1
    }
    else {
      b[i].classList.remove('show')
      b[i].classList.add('hide')
    }
  }
  document.getElementById('current').innerText = c
}

document.getElementById('searchFilter').addEventListener('keyup',Filter)

document.getElementById('latest').href = `https://www.udemy.com/user/${location.pathname.split('/')[location.pathname.split('/').length-2]}`