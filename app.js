


// reduce- Сумирование значений
// Что бы получить сумму значений числового массива, используйем метод reduce


// const sum = array.reduce  ((acc, value) => acc + value, 0);

// array.reduce((аккумулятор,элемент) =>{noon}, баштапкы_маани);


// const numbers = [1, 6, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num,);
// console.log(sum);



// numbers = [1,2,3,4,5];
// number. reduce((total,num))



// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((total,num) => total + num,0);
// alert(`Сандардын суммасы: ${sum}`);






// FlatMap - Бул биринчиден масивдин ар бир элементине иштеп, аны озгортот жана андан кийин бир же коп сандагы массивди бириктирет(бир дээнгелге чейин).Мисалы коп денгелдуу структураны жалпак структурага айланту учун колдонулат.
// const phrases = ["hello world", "foo bar",];
// const words = phrases.flatMap(phrases => phrases.split(" "));
// console.log(words);




// const users = [
//     { name: "Alice", hobbies: ["Reading", "Swimming"] },
//     { name: "Bob", hobbies: ["Cycling", "Hiking"] },
//     { name: "Charlie", hobbies: ["Gaming", "Painting"] }
// ];
   
// const info = [
//     { nama: "John", hobby: "muz" },
//     { nama: "Maks", hobby: "dance" },
//   ];
// //   const allHobby = info.flatMap((hob) => hob.nama );
//   const allHobby = info.flatMap(info=> info. );
//   alert(allHobby);
  
// const users = [
//     { name: ['John'], hobby: ['Reading', 'Writing'] },
//     { name: ['Jane'], hobby: ['Painting', 'Dancing'] }
//   ];
  
//   const names = users.flatMap(user => user.name); // ['John', 'Jane']
//   const hobbies = users.flatMap(user => user.hobby); // ['Reading', 'Writing', 'Painting', 'Dancing']
//   alert(`Names:  ${names.join(', ')} \nHobbies:  ${hobbies.join(',   ')}`);

// // Using flatMap to get a single list of all hobbies
// const allHobbies = users.flatMap(user => user.hobbies);
// console.log(allHobbies);
// Output: ["Reading", "Swimming", "Cycling", "Hiking", "Gaming", "Painting"]



// const products =[
//     { name: "Нурзада", hobby: ["sleep", "cooking","smile" ]},
//     { name: "рубашка", categories: ["clothing", "fashion"]},
//     { name: "книга", categories: ["books", "education"]},
// ];
// // бардык категорияны чогултуп алыш учун FlatMap колдонобуз.
//  const allcategories = products.flatMap(products => products.categories);
// console.log(allcategories);





//Find -массивдеги шартка туура келген биринчи элементи кайтарат.Эгер шартка туура келген элемент табылбаса, undefined кайтарылат.конкретный элемент табыш керек болгондо
// array.find((Элемент) => {/*шарт*/});
// Мисалы-берилген сандан чон болгон санды табуу:

// var numbers =[1,2,3,5];
// var found =numbers.find(num => num >3);
// console.log(found); 





// const products = [1, 2, 3, 4, 5, 6, 7, 8, 5];
// const first5 = products.find((element) => element === 8);
// console.log(first5);








// products.find((element) => element === 5)

// const products = [
//     { id: 1, name: "Laptop", price: 899 },
//     { id: 2, name: "Mouse", price: 25 },
//     { id: 3, name: "Keyboard", price: 75 },
//     { id: 4, name: "Monitor", price: 150 }
// ];

// // Используем find для поиска первого товара с ценой выше 100
// const expensiveProduct = products.find(product => product.price > 100);

// console.log(expensiveProduct);
// // Результат: { id: 1, name: "Laptop", price: 899 }



// console.log(Array.isArray([1, 2, 3]));  // true
// console.log(Array.isArray('Hello'));    // false
// console.log(Array.isArray({[{name: 'Tom'}]}false
// console.log(Array.isArray(undefined));  // false
// console.log(Array.isArray([5]));        // true
// console.log(Array.isArray([]));         // true
// const numbers = [5, 12, 8,7,10, 130, 44];

// Используем filter для получения чисел больше 10
// const filteredNumbers = numbers.filter(number =>number = 10   );

// console.log(filteredNumbers); 
// const numbers = [1,2,3,4,7];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// },0);
// console.log(sum);-

// concat


// const a = ["nuri"];
// const c = [21,22,33,]
// const b = ["elita"];
// const f = [21,22,33,]
// const result =a.concat(c,b,f)

// console.log(result);





const name = prompt("Атыңыз ким?");
const year = prompt("Туулган жылыңыз?");
const color = prompt("Жакшы көргөн түсүңүз?");

// Маалыматтарды массивге кошуп, анан сапка айлантабыз.
const userInfo = [name, year, color];
const result = userInfo.concat(", ");

alert("Сиздин маалыматыңыз: " + result);











