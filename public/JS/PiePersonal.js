$(document).ready(function(){
    $(document).on('click', 'button', function(){
        $.ajax({
            url: "http://localhost:8080/fetch/test",
            method: "GET",
            success : function(res){
                console.log("SUCCESS" + res.toString())
            },error : function(err){
                console.log("FAILED" + err);
            }
        }).done(function(){
            $('div').append("DONE !");
            console.log("DONE");
        });
    });
});