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
    for(let d=1; d<list.length; d++){
        if(d == isOdd()){
          temp.push(list[d]);
        }
    }
    return temp;
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
    let testVariable = new largest([8,5,2,3,6,9,1,4,7])
    let testVariablei = new reverse([6,5,9,10,7,3])
    let testVariableii = new contains([6,5,8,7,9,3,2,1],5)
    let testVariableiii = new reverse([6,5,9,10,7,3])

    console.log(testVariable);
    console.log(testVariablei);
    console.log(testVariableii);
    console.log(testVariableiii);
