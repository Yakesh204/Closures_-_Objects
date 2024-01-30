//the value of format WNO, LMF or MFL ex: for Taylor Alison Swift
// WNO – Western Name order (First, middle, last), e.g. Taylor, Alison, Swift
// ENO – Eastern Name order (Last,middle, first ), e.g. Swift, Alison, Taylor
// SCH -  School order (last, first, middle), e.g. Swift, Taylor, Alison
function getNameFormat(format){
    //Define functions that take in an arbitrariy number of strings. 
    //Each strings contains names to be parsed according to the given format (defined above) and received here as an argument.
    //Within each string, the name components are sperated by a space (" "), the different names are seperated by commas.
    //Each function returns a stringified array of objects containing the parsed names
    //the order of the properties in each object should be name, middle, last, regardless of the orginial format
    function createNameParser(format) {
        return function (...names) {
          let result = [];
          for (let i = 0; i < names.length; i++) {
            let first, middle, last;
            const nameParts = names[i].split(" ");
    
            if (format === "WNO") {
              first = nameParts[0];
              middle = nameParts[1];
              last = nameParts[2];
            } else if (format === "ENO") {
              first = nameParts[2];
              middle = nameParts[1];
              last = nameParts[0];
            } else if (format === "SCH") {
              first = nameParts[1];
              middle = nameParts[2];
              last = nameParts[0];
            }
    
            result[i] = { first, middle, last };
          }
          return JSON.stringify(result);
        };
      }
    
      if (format === "WNO") {
        return createNameParser("WNO");
      } else if (format === "ENO") {
        return createNameParser("ENO");
      } else if (format === "SCH") {
        return createNameParser("SCH");
      }
}

// add an assignment for each of the following bindings so that it would be point at a closure of the corresponding format 
let WesternOrderParser = getNameFormat("WNO");
let EasternOrderParser = getNameFormat("ENO");
let SchoolOrderParser = getNameFormat("SCH");


// Please don't change these lines
module.exports.westernOrderParser = WesternOrderParser;
module.exports.easternOrderParser = EasternOrderParser;
module.exports.schoolOrderParser = SchoolOrderParser;

/*
   If you would like to run the tests locally to check your work before submission you need to following the following steps
- Open a terminal inside the working directory
- Run the command `npm install` (only needed once)
- Run the command `npm test` (everytime you would like to run the tests)
*/