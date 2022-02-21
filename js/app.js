console.log('ciao');

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]



const slider = document.querySelector('.slider-wrapper');
const controller = document.querySelector('.controller-wrapper');




let sliderItem = '';
let controllerItem = '';

for (let i = 0; i < items.length; i++) {

    sliderItem += `
    <div class="slider-item ">
        <div class="slider-img">
        <img src="${items[i]}" alt="${title[i]}">
        </div>
    
    <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
        </div>
        </div>`
    
    controllerItem += `
    <div class="controller-item ">
        <img src="${items[i]}" alt="">
        </div>`
}


slider.innerHTML += sliderItem;
document.getElementsByClassName('slider-item')[0].classList.add('active');
controller.innerHTML += controllerItem;
document.getElementsByClassName('controller-item')[0].classList.add('active');

const nextBtn = document.getElementById('up');
const prevBtn = document.getElementById('down');

let activeCounter = 0;

nextBtn.addEventListener('click',
function() {
    
        if ( activeCounter < items.length - 1 ) {
            ++activeCounter;
            console.log(activeCounter);    
        } else {
            activeCounter = 0;
        }

        document.querySelector('.slider-item.active').classList.remove('active');
        document.getElementsByClassName('slider-item')[activeCounter].classList.add('active');
                
        document.querySelector('.controller-item.active').classList.remove('active');
        document.getElementsByClassName('controller-item')[activeCounter].classList.add('active');
        
    
    }
);

prevBtn.addEventListener('click',
    function() {
        
        if ( activeCounter > 0 ) {
            --activeCounter;
            console.log(activeCounter);    
        } else {
            activeCounter = items.length - 1;
        }
        
        document.querySelector('.slider-item.active').classList.remove('active');
        document.getElementsByClassName('slider-item')[activeCounter].classList.add('active');
                
        document.querySelector('.controller-item.active').classList.remove('active');
        document.getElementsByClassName('controller-item')[activeCounter].classList.add('active');
        
    
    }
);