import axios from 'axios';
import moment from "moment";

class game{
    constructor(time,homeTeam,visTeam,homeScore,visScore,period,status){
        this.time = time;
        this.homeTeam = homeTeam;
        this.visTeam = visTeam;
        this.homeScore = homeScore;
        this.visScore = visScore;
        this.period = period;
        this.status =status;
    }

    show(){
        console.log( this.time ,
            this.homeTeam,
            this.visTeam ,
            this.homeScore ,
            this.visScore ,
            this.period ,
            this.status)
    }
}

async function fetchData(){
    const today = moment();
    const yesterday = moment().add(-1,'days');

    const startDate =yesterday.format('YYYY-MM-DD')+"T06:00:00.000Z" ;
    const endDate=today.format('YYYY-MM-DD')+"T06:00:00.000Z";

    const headers = {
        headers: {
            
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials':true,
        }

    }
    var response = await axios.get('https://balldontlie.io/api/v1/games?start_date='+startDate+'&end_date='+endDate,headers
    );
    var games= await response.data;
    while(games=== Promise){};
    var GameList = [];
    for(var i =0; i< games["data"].length;i++){

        let Game = new game(
            games["data"][i]["status"],
            games["data"][i]["home_team"]["full_name"],
            games["data"][i]["visitor_team"]["full_name"],
            games["data"][i]["home_team_score"],
            games["data"][i]["visitor_team_score"],
            games["data"][i]["period"],
            games["data"][i]["status"]


        )
        if (Game.period ===0){
            Game.status="Game hasn't started"
        }

        Game.show();

        GameList.push(Game);

    }
    return GameList;

    

}



export default fetchData;