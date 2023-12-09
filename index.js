// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat(Yoyo) {
    cats.push(Yoyo);
}

function destructivelyPrependCat(vader) {
    cats.unshift(vader)
}

function destructivelyRemoveLastCat(Fluffy) {
    cats.pop(Fluffy)
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo)
}

//I COULDN'T QUITE MOVE FROM THIS ASSIGNMENT. I'M EXPERIENCING A BLOCKER THAT DOESN'T SEEM TO GO AWAY.

function prependCat(Truble) {
    let CatSeys = [Truble, ...cats] 
}



//