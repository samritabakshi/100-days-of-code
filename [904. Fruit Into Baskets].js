var totalFruit = function(fruits) {
    let window_start=0,max_length=Number.NEGATIVE_INFINITY,hash_map={}
  for(let window_end=0; window_end<fruits.length; window_end++){
    if(!(fruits[window_end] in hash_map)){
      hash_map[fruits[window_end]] =1
    }
    hash_map[fruits[window_end]] += 1
    if(Object.keys(hash_map).length > 2){
      let leftFruit = fruits[window_start];
      hash_map[leftFruit] -=1
      if(hash_map[leftFruit] == 1){
        delete hash_map[leftFruit]
      }
      window_start +=1
    }
    max_length = Math.max(max_length,window_end - window_start + 1);
  }
  return max_length;
};