'use server'

import axios from "axios";

export async function getMusics(){
    try {
        const res = await axios.get("http://127.0.0.1:5000/music")
        return res.data

    }catch (err){
        console.log(err)
        return []
    }
}