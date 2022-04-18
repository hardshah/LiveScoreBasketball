import  React from 'react';
import livebb from './livebb';
import {useState} from 'react';
import { useEffect } from 'react';
import fetchData from '../api/api.mjs'


function GetGames(){

    const[games, setGames] =
    useState([]);

    useEffect(()=>{
        fetchData().then((data)=> {
            setGames(data);
            console.log(data);
        }).catch(err=>console.log(err))
    }, []);

    return(
        <div className='games'>
            display games
        </div>

    )
}

export default GetGames;
