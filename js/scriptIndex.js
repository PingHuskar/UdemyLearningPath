const users = [
    { gh: "pinghuskar", uurl: "chadinchaipornpisuth2" },
    { gh: "immortalgky", uurl: "jirakit" }
]
const elasticstack = document.getElementById('elasticstack')

const opens = (gh,uurl) => {
    // console.log(gh,uurl)
    open(`${location.origin}/${uurl}/?limit=12`,"app");
    open(`https://github.com/${gh}?tab=repositories`,"ghrepo");
}

for (var user of users) {
    // console.log(user.uurl)
   elasticstack.innerHTML += `<li>
   <a href="#" onclick="opens('${user.gh}','${user.uurl}')">
   <img src="https://unavatar.io/github/${user.gh}" alt="${user.gh}"/>
   <h5>
   <span>${user.gh.toUpperCase()}</span>
   </h5>
   </a>
   </li>
   `
}