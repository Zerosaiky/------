'use strict'

let numberOfFilms;

function start()
{
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};


function rememberMyFilms()
{
    for (let i = 0; i < 2; i++)
        {
            const a = prompt('Один из любимых фильмов', ''),
                  b = prompt("Оцените от 1 до 10", '');
            if(a != null && b != null && a.length < 50 && a != '' && b != '')
            {
                personalMovieDB.movies[a] = b;  
                console('Yes')    
            }
            else
            {
                console.log('err');
                i--;
            }
        }
}



rememberMyFilms();

    

function detectPersonalLevel()
{
    if(personalMovieDB.count<10)
        {
            alert("Мало")
        }
        else if (personalMovieDB.count>10 || personalMovieDB.count<30)
        {
            alert("Ого, молодец, вы киноман")
        }
        else if (personalMovieDB.count>30)
        {
            alert("ужас как много")
        }
        else {
            alert("чо")
        }
}

detectPersonalLevel();


console.log(personalMovieDB)



/*
let vopros = [numberOfFilms, a, b]

for (let i = 0; i++; i<3)
{
    vopros[i];
}*/
