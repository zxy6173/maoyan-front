var HttpClient = require("../tool/HttpClient");
export let getHots = (ctx) => {
    return HttpClient.get("/films/hots").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}

export let getSoons = (ctx) => {
    return HttpClient.get("/films/soons").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}

export let getPlayings = (ctx) => {
    return HttpClient.get("/films/playings").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}

export let getBoxOffices = (ctx) => {
    return HttpClient.get("/films/boxOffices").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}
export let getWantWatches = (ctx) => {
    return HttpClient.get("/films/wantWatches").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}
export let getUserGrades = (ctx) => {
    return HttpClient.get("/films/userGrades").then((data) => {
        ctx.body = {
            result: 'get',
            data:data
        }
    });   
}

