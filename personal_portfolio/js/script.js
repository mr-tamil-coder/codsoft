const titleLinks=document.getElementsByClassName('title-links');
const aboutMeContents=document.getElementsByClassName('aboutMe-contents');

function show(title_value){
   for(titleLink of titleLinks){
        titleLink.classList.remove("active-link");
    } 
    for(aboutMeContent of aboutMeContents){
        aboutMeContent.classList.remove("active-contents");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(title_value).classList.add("active-contents"); 
}


