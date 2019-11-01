const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let head_img = document.getElementById("cta-img");
head_img.setAttribute('src', siteContent["cta"]["img-src"])
let mid_img = document.getElementById("middle-img");
mid_img.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let nav_bar= document.querySelectorAll('a');
let navItems = siteContent["nav"];
for(let i = 0; i < nav_bar.length; i++){
  nav_bar[i].textContent = navItems[`nav-item-${i+1}`];
  nav_bar[i].style.color = "green";
};

let head_text = document.querySelector('h1');
head_text.textContent = siteContent['cta']['h1']

let button_text = document.querySelector('button');
button_text.textContent = siteContent['cta']['button']

let main_text = document.querySelectorAll('.text-content');
main_text[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
main_text[0].querySelector('p').textContent = siteContent['main-content']['features-content']
main_text[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
main_text[1].querySelector('p').textContent = siteContent['main-content']['about-content']
main_text[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
main_text[2].querySelector('p').textContent = siteContent['main-content']['services-content']
main_text[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
main_text[3].querySelector('p').textContent = siteContent['main-content']['product-content']
main_text[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
main_text[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let contactInfo = document.querySelector('.contact');

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

let footer = document.querySelector('footer')

footer.innerText = "Copyright Great Idea! 2018"
