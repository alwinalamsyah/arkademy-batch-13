var biodata = {
name: "Muhammad Alwin Alamsyah Handoko Putra",
age: 24,
address: "Jalan Sunan Bayat Blok O8 No. 24, Bekasi",
hobbies: ["Music","Desain","Fotografi"],
is_married: 'FALSE',
list_school: [{
    "name" : "Universitas Brawijaya",
    "year_in" : 2013,
    "years_out": 2018,
    "major": "Teknik Elektro"
},
{
    "name": "SMA Negeri 9 Jakarta",
    "year_in": 2010,
    "years_out": 2013,
    "major": "IPA"
},
{
    "name": "SMP Negeri 80 Jakarta",
    "year_in": 2007,
    "years_out": 2010,
    "major": " - "
},
{
    "name": "SD Negeri 8 Jatiasih",
    "year_in": 2001,
    "years_out": 2007,
    "major": " - "
}],
skills:[{
    "skill_name": "Adobe AE",
    "level": "Advanced"
},
{
    "skill_name": "C++",
    "level": "Expert"
},
{
    "skill_name": "Javascript",
    "level": "Beginner"
},
{
    "skill_name": "PHP",
    "level": "Beginner"
},
{
    "skill_name": "HTML",
    "level": "Beginner"
},
],
interest_in_coding: 'TRUE'
}

//let getBiodata=biodata;
//var obj = JSON.parse(biodata);

function obj(name,age){
    if(name===biodata.name&&age===biodata.age){
         return biodata;
    }
    else{
        console.log("oke");
    }
}

console.log(obj("Muhammad Alwin Alamsyah Handoko Putra",24));