let segInHour = 60;
let minInHour = 60;
let hourInDay = 24;

//Funcion Declarada
function segInDay(a, b, c) {
  return (total = a * b * c);
}

console.log(segInDay(segInHour, minInHour, hourInDay));

// Arrow Funtion

const FsegInDay = (a, b, c) => a * b * c;

console.log(FsegInDay(segInHour, minInHour, hourInDay));
