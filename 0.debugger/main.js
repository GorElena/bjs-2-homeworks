//function main() {
//    console.log('Внутри функции main');
//    a();
//    a();
//    a();
//    d();
//    e();
//}
//
//function a() {
//    console.log('Внутри функции a');
//    b();
//}
//
//function b() {
//    console.log('Внутри функции b');
//    c();
//}
//
//function c() {
//    console.log('Внутри функции c');
//    let num = Math.random();
//    console.log('Случайное число: ' + num);
//    if (num > 0.5) {
//        console.log('num больше 1/2');
//    } else {
//        console.log('num меньше 1/2');
//    }
//}
//
//
//function d() {
//    console.log('Внутри функции c');
//    setTimeout(() => {
//        console.log('Внутри setTimeout');
//    }, 1000);
//}
//
//function e() {
//    throw new Error('Неизвестная ошибка');
//}
//
//main();
//function showTariff(name, ...advantages){
//  console.log(`Тариф: ${name}`);
//  for(let i = 0; i < advantages.length; i++){
//    console.log(`-${advantages[i]}`);
//  }
//}
//showTariff("Базовый","Кровать на чердаке","Беседы с дядей Ваней");
//showTariff("Премиум","Кровать на чердаке","Беседы с дядей Ваней",
//          "Кофе в постель", "Раздельный санузел");

