// // let  arr = [1, 3, 4, 4, 6]   // Answer : - 4   
//  let B = 4;

// //  let arr=[1, 2, 5, 5]          // answer : - 2
// // let B = 3 
// function shn(arr,B){
//   let start =0;
// let end =arr.length-1
//  while(start<=end){
//   let mid =parseInt((start+end)/2);

//   if(arr[mid]===B  ||arr[mid]===B-1 ||arr[mid]===B-2 ){
//     return arr[mid]
//   }
//  }
//  if(arr[mid]>B){
//   end= mid-1 
//  }
//  else{
//       start =mid+1  
// } return "********"
// }
// console.log(shn(arr,B))
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

//         if (arr2[mid] === find) {        //if value is less the 2
        //  console.log(arr2[mid])
//             return mid;
//         }  if( arr2[mid] < find) {        
//             start = mid + 1;
//         } else {                         // search in left side
//             end = mid - 1;
//         }
//     }

//     return start;
// }
// console.log(shn(arr2,find))
// ---------------------------------------------------------------------
// let arr2= [1, 3, 5, 6];      
// let find =2
// function shn(arr2,find){
// for(let a=0;a<arr2.length;a++){
//   if(arr2[a]>=find){
//     return a
//   }
// }
// }
// console.log(shn(arr2,find))
// -------------------------------------------------------------------------------
// let nums = [5,7,7,8,8,10];
// let target=8;
// var searchRange = function(nums, target) {
//   for(let a=0;a<nums.length;a++){
//     if(nums[a]===target){
//       return a && a
//     }
//   }
// };
// console.log(searchRange(nums,target))
// -------------------------------------------------------------
// Binary search 
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]

// let find = 13;

// function shn(arr,find){

//   let start =0;
//   let end =arr.length-1;

//   while(start<=end){      //start =7 //3 step
//     let mid  = parseInt((start+end)/2);  // mid= 6 (1'st step),  4'th step =(7+12/2 =9 round figure now mid ka index =9)
//     console.log(mid,"mid")   //convertt decimal into number
//     if(arr[mid]===find){    //5th step =(arr[mid] h jo uspe mid ka index 9 h to array k 9th index ki value check kr)
//       console.log(arr[mid],"arr[mid]")
//       return mid
//     }
//     if(arr[mid]>find){     //6th step (arr k 9 index ki value badi h find ki value ) to else
//       end =mid -1
//     }else{
//       start =mid+1     //  7    ----2 step  ,,,  7th step mid ki value = 10 kro
//     }
//   } return "not availabe"

// }
// console.log(shn(arr,find))

// ------------------------------------------------------------

let arr=[1,2,3,4,5,6,7,8,9]
function Binary(arr,find){

let start =0;
let end=arr.length-1;
while(start<=end){
   let mid=parseInt((start+end)/2)
if(arr[mid]===find){
  return mid
}
 
else{
  start=mid+1
}
}

}
console.log(Binary(arr,8))  //12




// $ nodemon binarySearch.js
// [nodemon] 2.0.22
// [nodemon] to restart at any time, enter `rs`      
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,json
// const http=require("http");
// console.log(http)