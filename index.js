var cats =['Milo', 'Otis', 'Garfield'];
cats;
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(){
    cats.push('Ralph')
    cats;
};
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyPrependCat(){
    cats.unshift('Bob')
    cats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
    cats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
    cats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function appendCat(name){
    const catsCopy = [...cats];
    catsCopy.push(name);
    return catsCopy;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(name){
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat(){
    const copyCat = [...cats]
    copyCat.slice(0,2)
    return copyCat.slice(0,2);
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeFirstCat(){
    const firstCat = [...cats]
    firstCat.slice(1,3)
    return firstCat.slice(1,3)
  }