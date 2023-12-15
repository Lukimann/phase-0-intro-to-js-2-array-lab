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

function appendCat() {
    return cats.concat('Broom')
}

const prependCat = () =>  {
    return ['Arnold', ...cats]
}

const removeLastCat = () => {
    return cats.slice(0, -1)
}

const removeFirstCat = () => {
    return cats.slice(1)
}

//let appendCat = cats.concat('Broom');


//I COULDN'T QUITE MOVE FROM THIS ASSIGNMENT. I'M EXPERIENCING A BLOCKER THAT DOESN'T SEEM TO GO AWAY.

//function prependCat(Truble) {
  //  let CatSeys = [Truble, ...cats] 
//}



//