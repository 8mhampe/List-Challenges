//Task 1
function largest(list){
    let largestNumber = list[0];
    for(let n=1; n<list.length; n++){
        if(list[n] > largestNumber){
            largestNumber = list[n];
        }
    }
    return largestNumber;
}

//Task 2
function reverse(list){
    let temp = [];
    for(let r=0; r<list.length; r++){
        temp.push(list[r]);
    }
    return list;
}

//Task 3
function contains(list,e){
    let temp = [];
    for(let c=0; c<list.length; c++){
        if(list[c] == e){
          temp.push(list[c]);
        }
    }
    return temp;
}

//Task 4
function oddElements(list){
    let temp = [];
    for(let d=1; d<list.length; d=d+2){
          temp.push(list[d]);
    }
    return temp;
}

//Task 5
function total(list){
    let  total=0;
    for(let t=0; t<list.length; t++){
      total = total + list[t];
    }
    return total;
}

//Task 6
function isPalindrome(list){

}

//Task 7
//Do second to last
function recursiveTotal(list){
    let  total=0;
    for(let t=0; t<list.length; t++){
      total = total + list[t];
    }
    return total;
}
//Task 8
function concatenate(listA, listB){
    for (let b=0; b<listB.length; b++){
        listA.push(listB[b])
    }
    return listA;
}

//Task 9
function weave(listA, listB){

}

//Task 10
//Attempt last
function mergeInOrder(listA, listB){

}

//Task 11
function rotate(list,k){

}

//Task 12
function fibonacci(){

}

    let testVar = new largest([6,5,9,10,7,3]);
    let testVari = new reverse([6,5,9,10,7,3]);
    let testVarii = new contains([6,5,9,10,7,3],5);
    let testVariii = new oddElements([6,5,9,10,7,3]);
    let testVariiii = new total([6,5,9,10,7,3]);
    let testVariiiii = new isPalindrome([6,5,9,10,7,3]);
    let testVariiiiii = new recursiveTotal([6,5,9,10,7,3]);
    let testVariiiiiii = new concatenate([6,5,9,10,7,3],[8,9,4,5,6,4]);

    console.log(testVar);
    console.log(testVari);
    console.log(testVarii);
    console.log(testVariii);
    console.log(testVariiii);
    console.log(testVariiiii);
    console.log(testVariiiiii);
    console.log(testVariiiiiii);
