import http from "http";
import querystring from "querystring";
import {System} from "../config";
var request = function(method,path,data,func){
    let promise = new Promise(function(resolve,reject){
        // let hp = url.substring(0,url.indexOf("/"));
        // let path = url.substring(url.indexOf("/"));
        // let strs = hp.split(":");
        let queryData = "";
        let bodyData = "";
        // if(typeof data == "function"){
        //    func = data;
        // }else{
            if(method.toLowerCase() == "get"){
                queryData = querystring.stringify(data);
            }else{
                bodyData = querystring.stringify(data);
            }
        // }
        var opt = {
            method:method,
            host:System.HTTP_server_host,
            port:System.HTTP_server_port,
            path:path + "?" + queryData,
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
                "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
            }
        };
        var req = http.request(opt, function (serverFeedback) {

            
            if (serverFeedback.statusCode == 200) {

                var body = "";
                serverFeedback.on('data', function (data) {
                    // console.log("data",data.toString());
                    if(typeof data == 'object'){
                        body += data.toString("utf-8");
                    }else{
                        body += data;
                    }
                    
                    
                })
                .on('end', function () {
                        try{
                            resolve(JSON.parse(body));
                        }catch(e){
                            resolve(body);
                        }


                    });
            } else {
                // func();
                resolve();
            }
        });
        req.write(bodyData);
        req.end();
    });
    return promise;

}
var opt = {};
var asyncFunc = (function* (){
    for(;;){
        yield request(opt.method,opt.path,opt.data);
    }
}())
exports.get = function(path,data){
    opt.path = path;
    opt.method = "get";
    opt.data = data;
    return asyncFunc.next().value;
}
exports.post = function(path,data){
    opt.path = path;
    opt.method = "post";
    opt.data = data;
    return asyncFunc.next().value;
}
