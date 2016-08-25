/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	

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


/***/ }
/******/ ]);