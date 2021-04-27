var map = $('#mapplic').mapplic({
	source: 'map/map-data.json',
    csv: 'map/location-data.csv',
	height: 600,
	lightbox: true,
    marker: "hidden",
	maxscale: 1,
    sidebartoggle: true,
    fullscreen: true,
    thumbholder: true,
    developer: true
});