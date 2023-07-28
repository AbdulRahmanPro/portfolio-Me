const but_My_recent_works = document.getElementById("but_My_recent_works")
const colorNew = "#00ADB5"
const link_image_file = ["/image/cards/Image Card 1.jpg" ,"/image/cards/Image Card 2.jpg" , "/image/cards/Image Card 3.jpg"]
const idImage = ["img1","img2","img3"]
but_My_recent_works.addEventListener("click",()=>{
    but_My_recent_works.style.backgroundColor = colorNew
    idImage.forEach((image,index)=>{
        document.getElementById(image).setAttribute("src",link_image_file[index])
    })


})