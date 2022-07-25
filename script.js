console.log(data.length)
document.getElementById("courses").innerHTML = ""
for (var i = 0; i<data.length;i++) {
//     document.getElementById("courses").innerHTML +=  `<figure class="snip1104">
//     <img src="${data[i][2]}" alt="${data[i][0]}" />
// <figcaption>
//   <p>${data[i][0]}<span>${data[i][1]}</span></p>
// </figcaption>
// <a href="#"></a>
// </figure>`
document.getElementById("courses").innerHTML +=
`<figure class="snip1579"><img src="${data[i][2]}" alt="${data[i][0]}"/>
<figcaption>
  <h4>${data[i][0]}</h4>
  <h5>${data[i][1]}</h5>
  <blockquote>
    <p>${data[i][3]} ${data[i][4]}</p>
  </blockquote>
</figcaption><a href="${data[i][5]}"></a>
</figure>`
}