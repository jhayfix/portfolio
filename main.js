const menu = document.querySelector('#menu');
const menuLine = document.querySelectorAll('.menu-line');
const portraitContainer = document.querySelector('.portrait-container');
const portraitWrapper = document.querySelector('.portrait-wrapper');

const navbarItem = document.querySelectorAll('.navbar-item');
const navbar = document.querySelector('.navbar')
const headerFixed = document.querySelector('.header-fixed')

const brandName = document.querySelector('.branding-name')
const brandHeader = document.querySelector('.branding-header')

// Random Choice Picker
const tagsContainer = document.querySelector('#tags-container')
const rcpTextarea = document.querySelector('#rcp-textarea')
const rcpHeader = document.querySelector('#rcp-header')


// Movable Menu
const toTop = document.querySelector('.move-to-top')
const myDiv = document.querySelector('#mydiv')

// Scroll To Top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Draggable Div
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Draggable Menu
myDiv.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuLine.forEach((line) => {
        line.classList.toggle('show')
    });
    portraitContainer.classList.toggle('show');
    portraitWrapper.classList.toggle('show');
    navbarItem.forEach((item) => {
        item.classList.toggle('show')
    });
    navbar.classList.toggle('show');
    headerFixed.classList.toggle('show');  
})

// End Draggable Div

// Navbar Display

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuLine.forEach((line) => {
        line.classList.toggle('show')
    });
    portraitContainer.classList.toggle('show');
    portraitWrapper.classList.toggle('show');
    navbarItem.forEach((item) => {
        item.classList.toggle('show')
    });
    navbar.classList.toggle('show');
    headerFixed.classList.toggle('show');  
})

// Navbar Display End

// Navbar Fixed On Scroll
document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 50) {
            headerFixed.classList.add('show');
        }else {
            headerFixed.classList.remove('show')
        }
    });
});

// End Navbar Fixed On Scroll


// Auto Write Header
let headerText = 'Web Developer, Programmer & Designer...';
let autoWriteIndex = 0;

setInterval(autoWriteHeader,200)

function autoWriteHeader() {
    brandHeader.innerHTML = headerText.slice(0, autoWriteIndex);

    autoWriteIndex++

    if (autoWriteIndex > headerText.length) {
        autoWriteIndex = 0;
    }
}


// Random Choice Picker

// Auto Write
let rcpHeaderText = 'Random Choice Picker...';
let rcpIndex = 0;

setInterval(autoWriteRcpHeader,200)

function autoWriteRcpHeader() {
    rcpHeader.innerHTML = rcpHeaderText.slice(0, rcpIndex);

    rcpIndex++

    if (rcpIndex > rcpHeaderText.length) {
        rcpIndex = 0;
    }
}


rcpTextarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsContainer.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsContainer.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    },100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

// End Random Choice Picker

