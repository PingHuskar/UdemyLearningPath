# Instruction
## Run Once
var lst = []

function scrap() {
var a = $('.merchandising-course-card--course-title--23gJ2')

var b = $('.merchandising-course-card--instructor-titles--2y7jb')

var c = $('.merchandising-course-card--course-image--2onZD')

var d = $('.star-rating--reviews__stats--5lUh_')
var e = $('.star-rating--reviews__count--2S0Ik')
var h = $('.merchandising-course-card--mask--2Gm04')
for (var i = 0; i<12;i++) {
    lst.push([a[i].innerText,b[i].innerText,/\S+/.exec(c[i].srcset)[0],d[i].innerText,e[i].innerText,h[i].href])
}}

## Then
for allPages
- Run scrap()
- try: Open nextPage
- except: break

## Then2
- copy obj lst

^_^