
function abbreviation(nama){
console.log(nama.replace(/(?![A-Z])./g,''));
}

abbreviation("okkeEE");