

const $dot = $(".map .dot");
const $area = $(".area");
const $mapModal = $(".mapModal");

$("button.back").on("click",function(){
    window.history.back()
});

$("#signIn").on("click",function(){
    $("#loginModal").modal()
});

$("#loginModal").on("hidden.bs.modal",function(){
    location.assign("/member.html");
})

$("map area").hover(function(){
    var area = $(this).data("area");
    $(".map .area p").filter("."+area).css("background-color","#ffffa5")
},function(){
    var area = $(this).data("area");
    $(".map .area p").filter("."+area).css("background-color","#fff")
})

$(".map .area p").each(function(index,item){
    $(this).on("click",function(e){
        $mapModal.find(".modal-title").text(e.target.dataset.title);
        $mapModal.find(".map-address").text(e.target.dataset.map);
        $mapModal.modal()
    });
    $(this).on("mouseover",function(e){
        $(`[data-location=${e.target.dataset.location}]`).addClass("active")
    });

    $(this).on("mouseout",function(e){
        $(`[data-location=${e.target.dataset.location}]`).removeClass("active")
    });

});


$(".mapModal").on("shown.bs.modal",function(e){
    var chicago = new google.maps.LatLng(25.062855, 121.651125);

    var map = new google.maps.Map(document.getElementById('map'), {
        center: chicago,
        zoom: 15
    });

    var coordInfoWindow = new google.maps.InfoWindow();
    coordInfoWindow.setContent(createInfoWindowContent("某某停車場", "內容內容內容內容內容內容內容"));
    coordInfoWindow.setPosition(chicago);
    coordInfoWindow.open(map);

    function createInfoWindowContent(title,content) {

        return [
            title,
            content
        ].join('<br>');
    }

})
