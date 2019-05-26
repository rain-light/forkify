// https://www.food2fork.com/api/search 
// Login laza@mailsource.info
// Pass del troll
// Key 36b4a94c272df3854286a034f05ede14 

import axios from "axios";
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = "36b4a94c272df3854286a034f05ede14";
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error) {
            console.log(error);
        }
    }
}