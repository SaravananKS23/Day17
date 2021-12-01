var ten = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "10";
        callback();
    }, 1000);
}
var nine = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "9";
        callback();
    }, 1000);
}
var eight = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "8";
        callback();
    }, 1000);
}
var seven = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "7";
        callback();
    }, 1000);
}
var six = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "6";
        callback();
    }, 1000);
}
var five = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "5";
        callback();
    }, 1000);
}
var four = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "4";
        callback();
    }, 1000);
}
var three = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "3";
        callback();
    }, 1000);
}
var two = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "2";
        callback();
    }, 1000);
}
var one = function (callback){
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "1";
        callback();
    }, 1000);
}

ten(()=>{
    nine(()=>{
        eight(()=>{
            seven(()=>{
                six(()=>{
                    five(()=>{
                        four(()=>{
                            three(()=>{
                                two(()=>{
                                    one(()=>{
                                        setTimeout(()=>{
                                                document.getElementById("countdown").innerHTML = "Happy Independence Day!";
                                            }, 1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});