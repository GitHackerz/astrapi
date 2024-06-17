'use server'

import axios from "axios";

export async function getBooks(){
    try {
        const res = await axios.get("http://127.0.0.1:5000/books")
        return res.data

    }catch (err){
        console.log(err)
        return []
    }
}