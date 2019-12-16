let vowelsAndConsonants = s => 
{
    var vowels = [];
    var consonants = [];
    for(let i = 0; i < s.length; i++){
      s[i].match(/[a,e,i,o,u]/) ? vowels.push(s[i]) : consonants.push(s[i]);   
    }
        console.log(vowels.concat(consonants).join('\n'));
}
