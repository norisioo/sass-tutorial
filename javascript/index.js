$(function(){
    $('#searchButton').on('click', function(){
        var zipcode7 = $('#zipcode3').val() + $('#zipcode4').val();

        $.ajax({
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            data:{
                zipcode: zipcode7
            },
            dataType: "jsonp",
            success: function(data){
                setDisplay(data.results[0]);
            }
        });

        function setDisplay(result){
            $('#prefecture').text(result.address1);
            $('#city').text(result.address2);
            $('#town').text(result.address3);
            $('.result_area').css('display', 'block');
        }
    })
});