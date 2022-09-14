const toTitleCase = (str: string) => {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
//console.log(toTitleCase(`ashwini deepak kaujalgikar`))
const T1: any = (`ashwini deepak kaujalgikar`);
document.getElementById("15").innerHTML = T1

const T: any = (toTitleCase(`ashwini deepak kaujalgikar`));
document.getElementById("15_1").innerHTML = T
