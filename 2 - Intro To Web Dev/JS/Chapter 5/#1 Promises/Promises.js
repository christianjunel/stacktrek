// window.onload = function onload() {
const dataFile = [
    { fullName: 'connie_gulgowski', age: 26, salary: 37613 },
    { fullName: 'alana_beatty', age: 47, salary: 12427 },
    { fullName: 'marlon_hagenes', age: 55, salary: 47476 },
    { fullName: 'gregorio_bechtelar', age: 49, salary: 28977 },
    { fullName: 'greyson_wolf', age: 23, salary: 5971 },
    { fullName: 'elinor_bergnaum', age: 56, salary: 12683 },
    { fullName: 'kaitlin_wuckert', age: 38, salary: 14170 },
    { fullName: 'zachary_casper', age: 32, salary: 47909 },
    { fullName: 'serena_schuppe', age: 46, salary: 15311 },
    { fullName: 'emmitt_towne', age: 50, salary: 39088 },
    { fullName: 'jamal_schowalter', age: 17, salary: 47427 },
    { fullName: 'adrienne_carter', age: 55, salary: 13149 },
    { fullName: 'khalid_shields', age: 51, salary: 29181 },
    { fullName: 'charlotte_bechtelar', age: 15, salary: 40683 },
    { fullName: 'mozelle_corwin', age: 41, salary: 39444 },
    { fullName: 'blaze_renner', age: 28, salary: 32130 },
    { fullName: 'lilian_rogahn', age: 58, salary: 13129 },
    { fullName: 'cara_emard', age: 41, salary: 46718 },
    { fullName: 'kyler_maggio', age: 19, salary: 6268 },
    { fullName: 'bernita_christiansen', age: 45, salary: 27047 },
    { fullName: 'elody_grant', age: 34, salary: 6948 },
    { fullName: 'skylar_steuber', age: 19, salary: 5568 },
    { fullName: 'dannie_ruecker', age: 46, salary: 7217 },
    { fullName: 'ramiro_dooley', age: 45, salary: 38104 },
    { fullName: 'destiny_bruen', age: 42, salary: 47054 },
    { fullName: 'albina_hansen', age: 27, salary: 47550 },
    { fullName: 'albina_smith', age: 17, salary: 24912 },
    { fullName: 'kellie_kunde', age: 38, salary: 32896 },
    { fullName: 'lisandro_denesik', age: 62, salary: 18840 },
    { fullName: 'nels_goyette', age: 55, salary: 6875 },
    { fullName: 'luciano_blick', age: 19, salary: 14904 },
    { fullName: 'leora_west', age: 57, salary: 49004 },
    { fullName: 'baylee_flatley', age: 24, salary: 5373 },
    { fullName: 'tamara_ortiz', age: 41, salary: 25922 },
    { fullName: 'ursula_mills', age: 35, salary: 14234 },
    { fullName: 'alycia_nader', age: 34, salary: 23347 },
    { fullName: 'stefan_powlowski', age: 47, salary: 46853 },
    { fullName: 'holly_dickinson', age: 39, salary: 38663 },
    { fullName: 'antonetta_turcotte', age: 37, salary: 43430 },
    { fullName: 'pierce_cruickshank', age: 32, salary: 28591 },
    { fullName: 'marlee_reichel', age: 40, salary: 8889 },
    { fullName: 'allene_schimmel', age: 64, salary: 17746 },
    { fullName: 'carleton_franey', age: 17, salary: 23369 },
    { fullName: 'enoch_goyette', age: 19, salary: 29910 },
    { fullName: 'summer_deckow', age: 17, salary: 2939 },
    { fullName: 'damian_kulas', age: 25, salary: 34857 },
    { fullName: 'lew_kerluke', age: 18, salary: 39196 },
    { fullName: 'kathleen_klocko', age: 47, salary: 17795 },
    { fullName: 'jacky_armstrong', age: 17, salary: 24689 },
    { fullName: 'aidan_fadel', age: 28, salary: 6565 }
    ]

const theSortedByAgeData = Object.assign([], dataFile).sort((a, b) => a.age - b.age);

let promise = new Promise((resolve, reject) => {
    if (dataFile.length > 0) {
        resolve();
    } else {
        reject();
    }
});

promise.then (() => {
    const splitName = (name) => {
        const namePerWord = name.split("_");
        return namePerWord;
        };
        
    const capitalizeName = (namePerWordArray) => {
    return namePerWordArray.map(namePerWord => namePerWord[0].toUpperCase() + namePerWord.slice(1)).join(" ");
    }

    const isNotMinor = theSortedByAgeData.filter(ages => ages.age >= 18);

    const users = isNotMinor.map(data => {
        return `${capitalizeName(splitName(data.fullName))} ${data.age}`;
    })

    console.log(users);
    
}).catch (error => {
    console.log(error);
});

let promise2 = new Promise((resolve, reject) => {
    if (dataFile.length > 0) {
        resolve();
    } else {
        reject();
    }
});

promise2.then(() => {
    const isNotMinor = theSortedByAgeData.filter(ages => ages.age >= 18);
    
    const getSalary = isNotMinor.map(d => {
        return d.salary;
    });
    
    const salarySum = getSalary.reduce((total, num) => total + num);
    console.log("Total sum is: "+ salarySum);
}).catch(error => {
    console.log(error);
});
             
        
// }