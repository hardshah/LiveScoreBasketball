import fetch from 'node-fetch';
import moment from "moment";

class game{
    constructor(time,homeTeam,visTeam,homeScore,visScore,period){
        this.time = time;
        this.homeTeam = homeTeam;
        this.visTeam = visTeam;
        this.homeScore = homeScore;
        this.visScore = visScore;
        this.period = period;
    }

    show(){
        console.log( this.time ,
            this.homeTeam,
            this.visTeam ,
            this.homeScore ,
            this.visScore ,
            this.period )
    }
}

async function fetchData(){
    const today = moment();
    const yesterday = moment().add(-1,'days');

    const startDate =yesterday.format('YYYY-MM-DD')+"T06:00:00.000Z" ;
    const endDate=today.format('YYYY-MM-DD')+"T06:00:00.000Z";

    var response = await fetch('https://balldontlie.io/api/v1/games?start_date='+startDate+'&end_date='+endDate);
    var games= await response.json();
    await games!=Promise;
    var GameList = [];
    for(var i =0; i< games["data"].length;i++){

        let Game = new game(
            games["data"][i]["status"],
            games["data"][i]["home_team"]["full_name"],
            games["data"][i]["visitor_team"]["full_name"],
            games["data"][i]["home_team_score"],
            games["data"][i]["visitor_team_score"],
            games["data"][i]["period"]


        )

        

        GameList.push(Game);

    }
    return GameList;

    

}

var gamelist = await fetchData();
console.log(gamelist)




