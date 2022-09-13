const users = [
    { gh: "pinghuskar", uurl: "chadinchaipornpisuth2", uid: "11714446" },
    { gh: "immortalgky", uurl: "jirakit", uid: "24370922" }
]
const elasticstack = document.getElementById('elasticstack')

const opens = (gh,uurl) => {
    // console.log(gh,uurl)
    open(`${location.origin}/${uurl}/?limit=12`,"app");
    open(`https://github.com/${gh}?tab=repositories`,"ghrepo");
    open(`https://www.udemy.com/api-2.0/users/${user.uid}/subscribed-profile-courses/?fields[course]=badges,buyable_object_type,content_info,discount,free_course_subscribe_url,has_closed_caption,headline,image_100x100,image_240x135,image_480x270,image_50x50,instructional_level,instructional_level_simple,is_in_personal_plan_collection,is_in_premium,is_in_user_subscription,is_paid,is_user_subscribed,is_wishlisted,last_update_date,learn_url,num_published_lectures,num_reviews,objectives_summary,price,price_detail,price_serve_tracking_id,published_time,rating,title,tracking_id,url,visible_instructors&page=1&page_size=100`,"udemyAPI");
}

for (var user of users) {
    // console.log(user.uurl)
   elasticstack.innerHTML += `<li>
   <a href="#" onclick="opens('${user.gh}','${user.uurl}', '${user.uid}')">
   <img src="https://unavatar.io/github/${user.gh}" alt="${user.gh}"/>
   <h5>
   <span>${user.gh.toUpperCase()}</span>
   </h5>
   </a>
   </li>
   `
}