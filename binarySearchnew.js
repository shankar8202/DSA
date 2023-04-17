let arr=[13,1,2,3,4]  //  [6,7,8,9,10,11,12,13,1,2,3,4]     //[6,7,8,9,1,2,3,4] 

function shn(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      
  
      if (arr[mid - 1] <= arr[mid] && arr[mid + 1] <= arr[mid]) {
        return arr[mid];
      }
  
  
      if (mid === 0 && arr[mid] >= arr[mid + 1]) {
        return arr[mid];
      }
     
  
      if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
        start++;
        end--;
        // console.log(start)
      } else if (arr[mid] >= arr[start]) {
        start = mid + 1;
      } else if (arr[mid] <= arr[end]) {
        end = mid - 1;
      }
    }
  
    
  }
  
  console.log(shn(arr))