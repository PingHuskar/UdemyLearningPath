const keywords = document.getElementsByClassName('keywords')[0]

const programmingLanguages = [
    "Python",
    "React",
    "AJAX",
    "Git",
    ".NET",
    "Linux",
    "R Programming",
    "C#",
    "Flutter",
    "Dart",
    "GSAP",
    "GANs",
    "Artificial Intelligent",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "DevOps",
    "Data Analysis",
    "Data Analytics",
    "Data Engineer",
    "Data Visualization",
    "Power BI",
    "Tableau",
    "QLIK",
    "AutoML",
    "Data Structure",
    "Algorithms",
    "TypeScript",
    "Adobe",
    "Adobe XD",
    "Image Processing",
    "Microsoft",
    "Microsoft Azure",
    "Microsoft PowerApps",
    "Mongo",
    "Mongoose",
    "Mobile App",
    "Tailwind",
    "Bootstrap",
    "SCSS",
    "SASS",
    "MERN",
    "MEAN",
]

const instructors = [...new Set(instructor.flat())]
console.log(`${instructors.length} instructors`)
document.getElementById("countInstructor").innerText = `${instructors.length}`

const otherKeywords = [
    "2022",
    "Computer Science",
    "Photoshop",
    "Design",
    "Health",
    "English",
    "Reading",
    "TOEIC",
    "Speed",
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

// for (var keyword of customKeywords) {
//     var words = keyword.split(" ")
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     keywords.innerHTML += `<button onclick="key(this.innerText)">${words.join(" ")}</button>`
// }


$( "#searchFilter" ).autocomplete({
    source: function(req, responseFn) {
        var re = $.ui.autocomplete.escapeRegex(req.term);
        var matcher = new RegExp( "^" + re, "i" );
        var a = $.grep( customKeywords, function(item,index){
            return matcher.test(item);
        });
        
        
        var textValue = $("#searchFilter").val();
        if (textValue.slice(-1) == " ") {
            var start = textValue.lastIndexOf(" ", textValue.length-2);
            var lastWord = textValue.substring(start + 1, textValue.length-1);
            var pos = customKeywords.indexOf(lastWord);
            if (lastWord != " " && customKeywords.length > pos) {
                a.push($("#searchFilter").val() +customKeywords[pos+1]);
            }
        }
        
        responseFn( a );
    }
});