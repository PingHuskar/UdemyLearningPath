# Instruction

## snippet

if (/https:\/\/www.udemy.com\/home\/my-courses\/learning\/\?(p=\d+&)?sort=-enroll_time/.test(location.href)) {
    console.log(document.getElementsByClassName('my-courses__course-card-grid')[0].innerHTML)
    const searchParam = new URLSearchParams(location.search)
    const nextpage = parseInt(searchParam.get('p')) || 1
    open(`https://www.udemy.com/home/my-courses/learning/?p=${nextpage+1}&sort=-enroll_time`,"_blank")
}

^_^