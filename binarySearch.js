let  arr = [1, 3, 4, 4, 6]   // Answer : - 4   // // Input :- A = [1, 2, 5, 5]  //  B = 3   //// Answer: - 2
 let B = 3;

function shn(arr,B){
  let start =0;
let end =arr.length-1
 while(start<end){
  let mid =parseInt((start+end)/2);

  if(arr[mid]===B || arr[mid]===B-1 ||arr[mid]===B-2){
    return arr[mid]
  }
 }
 if(arr[mid]>B){
  end= mid-1
 }
 else{
      start =mid+1  
} return "********"
}
console.log(shn(arr,B))
// -----------------------------------------------------

// Question no.2:-

// Given a sorted array A and a target value B, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// Input 1:
//  A = [1, 3, 5, 6]
// B = 5
// answer= 2


// input :- 2
//  A = [1, 3, 5, 6]
// B = 2
// answer = 1


// By Binary Search
// -------------------


// let arr2= [1, 3, 5, 6];      
// let find =2               

// function shn(arr2, find) {
//     let start = 0;
//     let end = arr2.length - 1;
 

//     while (start <= end) {
//        let mid = parseInt((start + end) / 2);

//         if (arr2[mid] === find) {
//             return mid;
//         }  if( arr2[mid] < find) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return start;
// }
// console.log(shn(arr2,find))
// ---------------------------------------------------------------------
