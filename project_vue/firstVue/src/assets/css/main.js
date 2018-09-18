/**
 *      __  __  __  __ 
 *      \ \ \ \/ / / / 
 *       \ \ \  / / /  
 *        \ \/  \/ /   
 *         \__/\__/    
 *  
 *		  Werklig.com
 */

'use strict';

var app = {};

;(function($){

	var  $doc = $(document);

	/** create mod exec controller */
	$.readyFn = {
		list: [],
		register: function(fn) {
			$.readyFn.list.push(fn);
		},
		execute: function() {
			for (var i = 0; i < $.readyFn.list.length; i++) {
				try {
				   $.readyFn.list[i].apply(document, [$]);
				}
				catch (e) {
					throw e;
				}
			}
		}
	};

	app = {
		initSmoothState: function () {
			// Smoothstate stuff
			var $main = $('#main'),
				transition = 'fade',
				smoothState,
                options = {
					debug: true,
					prefetch: true,
					cacheLength: 2,
					onBefore: function($anchor, $container) {
						var current = $('[data-viewport]').first().data('viewport'),
							target = $anchor.data('target');
						current = current ? current : 0;
						target = target ? target : 0;
						if (current === target) {
							transition = 'slideup';
						} else if (current === 1 && target === 2) {
							transition = 'moveright';
						} else if (current === 2 && target === 3) {
							transition = 'moveright';
						} else if (current === 3 && target === 1) {
							transition = 'moveright';
						} else if (current === 1 && target === 3) {
							transition = 'moveleft';
						} else if (current === 3 && target === 2) {
							transition = 'moveleft';
						} else if (current === 2 && target === 1) {
							transition = 'moveleft';
						} else if (current === 2 && target === 4) {
							transition = 'slideup';
						} else if (target === 4) {
							transition = 'slideup';
						} else if (current === 4 && target === 3) {
							transition = 'moveright';
						} else if (current === 4 && target === 1) {
							transition = 'moveleft';
						} else {
							transition = 'fade';
						}
					},
					onStart: {
						duration:350,
						render: function (url, $container) {
							$main.attr('data-transition', transition);
							$main.addClass('is-exiting');
						}
					},
					onReady: {
						duration: 350,
						render: function ($container, $newContent) {
							$container.html($newContent);
							$container.removeClass('is-exiting');
							app.initChangeBackgroundColor();
						}
					},
					onAfter: function($container, $newContent) {
						app.initGoogleMaps();
						app.initFacebookButton();
						app.initPresentationMode();
						$('.bg').attr('style', "background: rgba(255,255,255,0);");
					}
				};
			this.smoothState = $main.smoothState(options).data('smoothState');
		},

		initGoogleMaps: function () {
            console.log('Module Executed: Google Maps');

            this.map = document.getElementById('map');

            if (this.map) {
                if (window.google && window.google.maps) {
                    this.makeGoogleMaps();
                } else {
                    this.loadGoogleMaps();
                }
            }
        },
        loadGoogleMaps: function () {
            console.log('Module Loaded: Google Maps');

            var js, lg, fjs, id = 'google-maps-api';

            if (document.getElementById(id)) {
                return;
            }

            lg     = document.documentElement.getAttribute('lang');
            fjs    = document.getElementsByTagName('script')[0];
            js     = document.createElement('script');
            js.id  = id;
            js.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyChaBImotQjX2b7uJqxskDxrE0PogtkhJQ&callback=app.makeGoogleMaps';
            fjs.parentNode.insertBefore(js, fjs);
        },
        makeGoogleMaps: function () {
            console.log('Module Initiated: Google Maps');

            var latlng = new google.maps.LatLng(-37.856520, 145.027979),
                isTouchDevice = !('ontouchstart' in document.documentElement),
                mapOptions = {
					// How zoomed in you want the map to start at (always required)
					zoom: 15,
					// make map non interactive
					scrollwheel: false,
					navigationControl: false,
					mapTypeControl: false,
					scaleControl: false,
					draggable: false,
					disableDefaultUI: true,
					// The latitude and longitude to center the map (always required)
					center: new google.maps.LatLng(60.169773,24.956935),
					// Map styles
					styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

				};
				var mapElement = document.getElementById('map');
				var map = new google.maps.Map(mapElement, mapOptions);
				var image = new google.maps.MarkerImage( 
					wp_template_dir + '/map-marker.svg',
					null, /* size is determined at runtime */
					null, /* origin is 0,0 */
					null, /* anchor is bottom center of the scaled image */
					new google.maps.Size(80, 100));
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(60.169773,24.956935),
					map: map,
					icon: image,
					title: 'Werklig Oy'
				});
        },
        initPresentationMode: function() {
        	var current = $('[data-viewport]').first().data('viewport');
			// When a key is pressed check if page number matches single work
			document.onkeydown = checkKey;
			function checkKey(e) {
				e = e || window.event;
				if (current === 4) {
					// if so, enable presentation mode if...
					if (e.keyCode == '80') {
						// key p or P is pressed, toggle presentation mode
						$('body').toggleClass('presentation');

					} else if (e.keyCode == '27') {
						// key esc is pressed, remove presentation mode
						$('body').removeClass('presentation');
					}
				}
			}
        },
        initChangeBackgroundColor: function() {
        	if (document.documentElement.clientWidth > 768) { // do only if screen is bigger than 768 px wide (mobile)
				$('.picture--container').on('click', function() {
					var color = $(this).data('color');
					$('.bg').attr('style', "background: radial-gradient(ellipse at center, rgba("+ color +",1) 0%, rgba(255,255,255,0) 61%, rgba(255,255,255,0) 100%);");
				});
				$('.navlink').on('click', function() {
					$('.bg').removeAttr('style');
				});
			}
        },
        // parse facebook share after page load
        initFacebookButton: function() {
        	FB.XFBML.parse();
        }
	};

    $doc.ready(function() {
        console.log('Initial Document Ready');
        app.initSmoothState();
        app.initPresentationMode();
        app.initChangeBackgroundColor();
        $.readyFn.execute();
    });

    /** [4] */
    $.fn.ready = $.readyFn.register;

})(jQuery);

/** [5] */
$(function() {
	app.initGoogleMaps();
});