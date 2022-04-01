const search_triplets = function(arr) {
    triplets = [];
    arr.sort((a,b) => a - b)
    
    for(let i=0;i<arr.length;i++){
       if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
        continue;
      }
      search(i+1,arr.length-1,triplets,arr,-arr[i])
    }
    return triplets;
  };
  
  function search(start,end,triplets,arr,target_sum){
      while(start < end){
        console.log(target_sum, arr[start], arr[end])
        console.log(arr[start] + arr[end] + target_sum)
  
        if (arr[start] + arr[end] === target_sum){
          triplets.push([-target_sum, arr[start], arr[end]])
          start++;
          end--;
          while (start < end && arr[start] === arr[start - 1]) {
            start++; // skip same element to avoid duplicate triplets
          }
          while (start < end && arr[end] === arr[end + 1]) {
            end--; // skip same element to avoid duplicate triplets
          }
        } else if(arr[start] + arr[end] < target_sum){
          start++;
        } else{
          end--;
        }
      }
  }
  