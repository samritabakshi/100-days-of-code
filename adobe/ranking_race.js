//You have the start time, end time and index number of racers in a race. You need to tell the rank of each racer. The rank is calculated as following: if racer B starts after racer A but finishes before racer A, then the rank of racer A increases by 1.



var data = [
    { start:100, end:170, rank:0 },
    { start: 80, end:150, rank:0 },
    { start:120, end:165, rank:0 },
    { start:110, end:145, rank:0 }
  ];
  
  var operations = 0;
  
  for (var a in data) {
    for (var b in data) {
      // "if racer B starts after racer A but finishes before racer A"
      if (data[b].start > data[a].start &&
          data[b].end < data[a].end) {
        // "then the rank of racer A increases by 1"
        data[a].rank++;
      }
      operations++;
    }  
  }
  
  console.log("Performed " + operations + " operations for " + data.length + " items.");
  console.log(data);