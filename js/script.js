// class Text {
//     constructor(obj) {
//         this.el = document.querySelector(obj.el)
//         this.fulltext = this.el.innerHTML
//         this.el.innerHTML = ''
//         this.str()
//     }
//     str(x = 0) {
//         this.el.innerHTML += this.fulltext[x]
//         x++

//         if (x <= this.fulltext.length) {
//             setTimeout(() => {
//                 this.str(x)
//             }, 100);
//         } 
//         else{
//             this.el.innerHTML = ''
//             x = 0
//             setTimeout(() => {
//                 this.str(x)
//             }, 100);
//         }
//     }
// }

const text = new Text({
    el: '.desc__paragraph-title'
})

class AppearTeam{
    constructor(obj){
        this.section = document.querySelector(obj.section);
        this.cards = document.querySelectorAll(obj.cards);

        window.addEventListener('scroll', () => this.emerge())
    }

    emerge() {
        const scrollPosition = window.scrollY,
         sectionTop = this.section.offsetTop,
         sectionHeight = this.section.offsetHeight;
    
        if (scrollPosition >= sectionTop - (sectionHeight * 2)) {
            this.cards.forEach(card => {
                const speed = card.hasAttribute('data-speed') ? card.getAttribute('data-speed') : 400;
                card.classList.add('active');
                card.style.transition = `${speed / 1000}s ease-in-out`;
            });
        }
    }
}

const appearTeam = new AppearTeam({
    section: '.team__cards',
    cards: '.team__card'
})

class AppearService{
    constructor(obj){
        this.section = document.querySelector(obj.section);
        this.cards = document.querySelectorAll(obj.cards);

        window.addEventListener('scroll', () => this.emerge())
    }

    emerge() {
        const scrollPosition = window.scrollY,
         sectionTop = this.section.offsetTop,
         sectionHeight = this.section.offsetHeight;
    
        if (scrollPosition >= sectionTop - sectionHeight) {
            this.cards.forEach(card => {
                const speed = card.hasAttribute('data-speed') ? card.getAttribute('data-speed') : 400;
                card.classList.add('active');
                card.style.transition = `${speed / 1000}s ease-in-out`;
            });
        }
    }
}


const appearService = new AppearService({
    section: '.cards',
    cards: '.card'
})
