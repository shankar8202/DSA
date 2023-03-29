





















// let arr = [{prodA : ["bike", "scooter"],prodB : "itemA"},
//            {prodA : ["utensils", "washing machine"],  prodB : "itemB"},
//            {prodA : ["car", "train"],prodB : "itemA"},
//            {prodA : ["sofa-set", "clothes"],prodB : "itemB"},]


//    let empty=[];
//    let obj={};
//    for(let i=0;i<arr.length;i++){
//     let current =arr[i]
//     console.log(current,"cur")
//     if(obj.hasOwnProperty(current.prodB)){
//       continue
//     }
//     for(let j = i+1;j<arr.length;j++){
//       if(arr[i].prodB===arr[j].prodB){
//         // current.prodA=[...current.prodA,...arr[j].prodA]
//         current.prodA=current.prodA.concat(arr[j].prodA)
//       }
//     }
//     obj[current.prodB]=true
//     empty.push(current)
//    }
// console.log(empty)