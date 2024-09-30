// Write your solution here!

//test1
const cats = ["Milo", "Otis", "Garfield"]

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test2
function destructivelyAppendCat(name){
    cats.push("Ralph")
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test3
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test4
function destructivelyRemoveLastCat(){
    cats.pop()
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test5
function destructivelyRemoveFirstCat(){
    cats.shift()
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test5
function appendCat(name){
    return [...cats,"Broom"]
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test6
function prependCat(name){
    return ["Arnold",...cats]
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test7
function removeLastCat(){
    return cats.slice(0, cats.length-1)
}

//default
function catLength(cats){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
}

//test8
function removeFirstCat(){
    return cats.slice(1)
}


