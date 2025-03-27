import axios from "axios";


export const client = axios.create({
	baseURL: "https://BeatBox-music-backend.vercel.app/api/",
});


