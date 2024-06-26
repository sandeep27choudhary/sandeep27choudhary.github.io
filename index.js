var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("#resume-link").on('click', function() {
        // Replace 'your_one_drive_resume_link' with the actual OneDrive link to your resume PDF
        const oneDriveResumeLink = 'https://docs.google.com/document/d/e/2PACX-1vTQOkYZW0e9A6UhROME4YKC8pw5G-Gx0y7HHQTdIeR0b_oD-O3mRY5s_cUsHrcmAQpWtC6BIG6qR6nC/pub';
        
        // Open the OneDrive link in a new window to trigger the download
        window.open(oneDriveResumeLink, '_blank');
    });
    
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
    });


// Your existing JavaScript code

// Function to fetch blog content from files
function fetchBlogContent() {
    // Assuming your blog files are stored in a "blogs" folder
    const blogFolder = 'blogs/';

    // Add the names of your blog files (without the .txt extension) here
    const blogFileNames = ['GenAI-in-DevOps'];

    // Fetch blog content and create blog cards
    blogFileNames.forEach(fileName => {
        fetch(`${blogFolder}${fileName}.txt`)
            .then(response => response.text())
            .then(content => createBlogCard(fileName, content));
    });
}

// Function to create a blog card
function createBlogCard(title, content) {
    const blogSection = document.getElementById('blog');

    // Create blog card elements
    const card = document.createElement('div');
    card.className = 'blog-card';

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    // Append elements to the blog section
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    blogSection.appendChild(card);
}

// Fetch blog content and create blog cards when the page is loaded
document.addEventListener('DOMContentLoaded', fetchBlogContent);

// Your existing JavaScript code
