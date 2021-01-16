var number = document.querySelectorAll('.number');
var numberTop = [];
var start = [];
var end = [];


for (let i=0; i<number.length; i++) {
    numberTop[i] =  number[i].getBoundingClientRect().top;
    start[i] = number[i].innerHTML;
    start[i] = Number(start[i]);
    console.log(start[i])
    end[i] = number[i].dataset.max;
    console.log(end[i]);
    window.addEventListener('scroll', function onScroll() {
        if(window.pageYOffset > numberTop[i] - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval = setInterval(function() {
                if (end[i] >= 1000000) {
                    start[i] += 111111;

                } else {
                    if (end[i] >= 100000) {
                        start[i] +=1111;
                    } else {
                        if (end[i] >= 10000) {
                            start[i] +=111;
                        } else {
                            start[i] ++;
                        }
                    }
                }
                number[i].innerHTML = start[i];
                if(start[i] >= end[i]) {
                    console.log(start[i]);
                    number[i].innerHTML = end[i];
                    clearInterval(interval);
                }
            }, 4);
        }
    }
)};
