function createDreamTeam(members) {
  let stringArray=[]
  let numberArray=[]

  if (!Array.isArray(members)) {
    return false;
  }
  
  for (i of members){

    if ((typeof(i)=='string')) {
      i=i.replace(/\s/g, '')
      numberArray.push(i[0].toUpperCase().charCodeAt(0))
    }
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  numberArray.sort(compareNumeric);

  for (i of numberArray){
      stringArray.push(String.fromCharCode(i));
  }

  return (stringArray.join(''))
}

module.exports = {
  createDreamTeam
};
