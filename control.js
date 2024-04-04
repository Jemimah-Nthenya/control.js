//question1
function cArray(arr) {
    let numArray = arr.map(Number);
    let multipliy = numArray.slice(0, 4).map((num) => num * num);
    let add = numArray.slice(-2).map((num) => num + 10);
    let resultArray = [...multipliy, ...add];
    return resultArray;
}
let numbers= [50, 20, 30, 70, 10, 40];
let result = cArray(numbers);
console.log(result);


//question2
let arrNum = [1,2,3,4,5,6,7,8,9];
let i =0;
while(i<arrNum .length){
    if(arrNum[i]==arrNum[3]){
        break
    }
    console.log(arrNum[i]);
    i++;
}

//question3
function arrstr2(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) {
            continue;
        }
        console.log(`Fruit: ${fruits[i]}`);
    }
}
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
arrstr2(fruits);

//question4
function arrayStr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Element: ${arr[i]}`);
    }
  }
    let cities = ["Nairobi", "Kisumu", "Mombasa"];
  arrayStr(cities);


  //Q5
  //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
  function reverseStr(str) {
    let reversedstr = '';
    let i = str.length - 1;
    while (i >= 0) {
      reversedstr += str[i];
      i--;
    }
    return reversedstr;
  }
    let str = "Hello";
  let reversedString = reverseStr(str);
  console.log("Reversed string:", reversedString);




