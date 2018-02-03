window.addEventListener("load",function(){
    $("form").submit(function(e){
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"/login",
            data:{
                phone:$("#login-email").val(),
                password:$("#login-password").val()
            },
            success:function(data){
                if(data.status == 1){
                    location.href = "index.html";
                }else{
                    $("form div.validate-info").replaceWith(`<div class="validate-info" style="visibility: visible;"><i class="tip-status tip-status--opinfo"></i>账号或密码错误，请重新输入</div>`);
                }
            }
        });
    });

    // $.ajax({
    //     type:"get",
    //     url:"/films/hots",
    //     success:function(data){
    //         console.log("Data",data);
            
    //     },
    //     error:function(xhr,status,err){
    //         reject(err);
    //     }
    // })
    // console.log("go on");
    

    let send = function(){
        console.log("send");
        return new Promise(function(resolve,reject){
            $.ajax({
                type:"get",
                url:"/films/hots",
                success:function(data){
                    setTimeout(()=>{resolve(data)},2000);
                    
                },
                error:function(xhr,status,err){
                    reject(err);
                }
            })
        });
    }
    // let s = send();
    // s.then(function(data){
    //     console.log("Data",data);
    // });

    // let generate = function* (){
    //     console.log("g1");
    //     let data = yield send();
    //     console.log(data);
    // }
    // let async = function(func){
    //     let it = func();
    //     it.next().value.then(function(data){
    //         it.next(data);
    //     });
    // }
    // async(generate);

    let generate = async function (){
        console.log("g1");
        let data = send();
        return data;
        
    }
    let async = function(func){
        let p = generate();
        p.then(function(result){
            console.log(result)
        })
        // let it = func();
        // it.next().value.then(function(data){
        //     it.next(data);
        // });
    }
    async(generate);




});