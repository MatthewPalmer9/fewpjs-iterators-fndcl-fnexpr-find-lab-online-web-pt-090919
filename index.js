const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let year 
  record.find(function(winYear){
    if(winYear["result"] === "W"){
      year = winYear.year
    }
  })
}