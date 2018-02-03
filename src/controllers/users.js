var HttpClient = require("../tool/HttpClient");
export let validatePhone = (ctx) => {
    return HttpClient.get("/users",ctx.query).then((data) => {

        let status = 0;
        if(!data.phone){
            status = 1;
        }
        ctx.body = {
            result: 'get',
            data:data,
            status
        }
    });   
}
export let register = (ctx) => {
    return HttpClient.post("/users",ctx.request.body).then((data) => {
        
        ctx.body = {
            result: 'post',
            status:'ok'
        }
    });   
}
export let login = (ctx) => {
    return HttpClient.get("/users",ctx.request.body).then((data) => {
        console.log("data",data);
        let status = 0;
        if(data.phone){
            status = 1;
        }
        ctx.body = {
            result: 'get',
            data:data,
            status
        }
        
    });   
}