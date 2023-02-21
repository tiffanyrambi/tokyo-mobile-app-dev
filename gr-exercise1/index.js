/*
Kelompok Tokyo
1. Tiffany Brenda Rambi
2. Angel Triany Pangkey
3. Vicky Ravensky Pati Ani
4. Josua Limbu
5. Putra Podomi 
*/

let people = ["Greg", "Mary", "Devon", "James"];
// 1. Use for-loop
for (let i=0; i<4; i++){
console.log(people[i]);
}

// 2. Use forEach
people.forEach(function(value){
console.log(value);
})

// 3. Remove 'Greg' From the array
people.shift();
console.log(people);

// 4. Remove "James" from the array
people.pop();
console.log(people);

// 5. Menambahkan "Matt" di awal array
people.unshift("Matt");
console.log(people);

// 6. Menambahkan "Tokyo" di akhir array
people.push("Tokyo");
console.log(people);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
for (let i=0; i<people.length; i++){
console.log(people[i]);
    if (people[i] == "Mary")
    {break;}
}

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let peopleCopy = people.slice(1);
console.log(peopleCopy);

// 9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat ("Bob");
console.log(withBob);



let programming ={
    languages: ["JavaScript", "Phyton", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add "GO" in the end array languages
programming.languages.push("Go");
console.log(programming);

// 2. By using the bracket notation, change the difficulty to the value of 7.
programming["difficulty"] = 7;
console.log(programming);

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

// 5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output. 
let newProgramming = programming.languages.map(function(item, index){
    return index+" "+item;
});
console.log(newProgramming);
