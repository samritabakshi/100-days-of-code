var canReach = function(arr, start, visited) {
    // if( start<0 || start >=arr.length ) return false;
    // if(arr[start] === 0) return true;
    // arr[start] = -arr[start]
    // return canReach(arr,start - arr[start]) || canReach(arr, start + arr[start])
    
    if(arr[start] === 0) return true;
    if(start < 0 || start >= arr.length || visited.has(start)) return false;
    visited.add(start);
    return canReach(arr, start + arr[start], visited) || canReach(arr, start - arr[start], visited);
};