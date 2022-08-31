const keywords = document.getElementsByClassName('keywords')[0]

const programmingLanguages = [
    "python",
    "React",
    "AJAX",
    "Git",
    ".NET",
    "linux",
    "C#",
]

const instructors = [
    "colt steele",
]
const otherKeywords = [
    "2022",
]

const customKeywords = [
    ...programmingLanguages,
    ...instructors,
    ...otherKeywords,
]

const key = (e) => {
    document.getElementById('searchFilter').value = e
    Filter()
}

for (var keyword of customKeywords) {
    var words = keyword.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    keywords.innerHTML += `<button onclick="key(this.innerText)">${words.join(" ")}</button>`
}
