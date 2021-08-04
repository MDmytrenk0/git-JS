//-------------------------------TASK 1------------------------
let num=prompt('Ведіть пароль');
let i=4;
while (i>=1 && num !='Пароль') {
    num=prompt(`Залишилося ${i} спроб`);
    i--;
}
if (num == 'Пароль' ) {
    console.log('Запрошуємо на сайт');
}
else {
    console.log('Будь ласка спробуйте пізніше');
}
//-------------------------------TASK 2------------------------
1. 
let n=+prompt('Ведіть число');
let r=1;
let i=r;
while (i<=n) {
    r *= i;
    i++;
}
console.log(r);
2.
let i=1000;
while (i<=9999) {
    document.write(i + ' ')
    i +=3;
}
3.
let i=1;
while (i<=55) {
    document.write(`<h2> ${i}</h2>`)  
    i+=2;
}
4.
let i=90;
while (i>=0) {
    document.write(i + ' ') 
    i-=5;
}
5.
let a=1;
let b=2;
while (b<20) {
    document.write(`<h2> ${b}</h2>`) 
    a++;
    b*=2;
}
6.
let a=2;
do {
    document.write(a + ' ');
    a=2*a-1;
}
while (a<10000);
7.
let a=-166;
while (a<100){
    if (a>-100 && (a<-9 || a>9)) {
    document.write(`<h2> ${a}</h2>`) 
    }
    a=2*a+200;
}
8.
let a=+prompt('Ведіть число');
let b=+prompt ('Ведіть степінь');
let i=0
let result=1;
let c=b;
if (b<0) {
    c=-b;
}
while (i<c) {
    result *=a; 
    i++;
}
if (b<0) {
    result=1/result;
}
console.log(result);