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
    let newArray = [];
    for(let r=0; r<list.length; r++){
        newArray.push(list[r]);
    }
    return newArray;
}

//Task 3
function contains(list,e){

}

//Task 4
function oddElements(list){

}

//Task 5
function total(list){

}

//Task 6
function isPalindrome(list){

}

//Task 7
//Do second to last
function recursiveTotal(list){

}
//Task 8
function concatenate(listA, listB){

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
    let testVariable = new reverse([6,5,9,10,7,3])
    console.log(testVariable);
