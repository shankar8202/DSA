
let str="babad"; //
function shn(){
  for(let i=0;i<=str.length-1;i++){
    for(let j=i+1;j<=str.length-1;j++){
      if(str[i]===str[j]){
         if(str[i]==str[j-1]){
            return (str[i],str[i+1])
        }
        else if(str[i+1]===str[j-1] ){
           console.log(str[i],str[j-1],str[j])
        }
       
        // console.log(i,j)
      }
    }
  }
}
console.log(shn(str))










// let arr=[1,2,3,4,7,8,5,4,7,8,9,2,1,2], k=3         // k=3 3 means 3rd highest value nikalni
// function shn(arr,k){
   
//     for(let i=0;i<arr.length-1;i++){
//      for(let j=i+1;j<arr.length-1;j++){
//         if(arr[i]>arr[j]){
//       let newVar=arr[i];
//       arr[i]=arr[j];
//       arr[j]=newVar
//         }
//      }
//     }
//     // console.log(arr,"arr")
//     let match=0
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]!==arr[i-1]){
//             match++
//         }
//         else if(match===k){
//           return  arr[i]
//         }
//     }

   
// }
// console.log(shn(arr,k))
// --------------------------------------------------
// function reverseNum(arr){
//     let opration=arr.toString().split("").reverse().join("")
// // console.log(opration)
// if(opration.endsWith("-")){
//     opration="-"+opration
//     return parseInt(opration)
// }
// else{
//     return parseInt(opration)
// }

// let x=20

// }

// console.log(reverseNum(-123))
// console.log(x)