
'use strict';

let numberOfFlims = prompt("Сколько фильмов Вы уже посмотрели?", '34');
const err = 'Something goes wrong...'

const personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {

    let a = prompt("Один из последних просмотренных фильмов", ),
        b = prompt("Какую оценку дадите?", '9.5');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log(err);
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
} else {
    console.log(err);
}

 console.log(personalMovieDB);



