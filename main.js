var mymap = L.map('mapid').setView([50, 0], 2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJhbmRvbm1vcmdhbjAxIiwiYSI6ImNqcHBwcTVpaDByMmgzeHA2b3FqNDUwdmoifQ.L1K_7q1iMJ75oBi7efbe2A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

// var obj = JSON.parse('{
//     type: "FeatureCollection",
//     metadata: {
//     generated: 1550898108000,
//     url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson",
//     title: "USGS Significant Earthquakes, Past Month",
//     status: 200,
//     api: "1.7.0",
//     count: 8
//     },
//     features: [
//     {
//     type: "Feature",
//     properties: {
//     mag: 7.5,
//     place: "115km ESE of Palora, Ecuador",
//     time: 1550830642410,
//     updated: 1550897175315,
//     tz: -300,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/us2000jlfv",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000jlfv.geojson",
//     felt: 402,
//     cdi: 6.7,
//     mmi: 6.99,
//     alert: "yellow",
//     status: "reviewed",
//     tsunami: 1,
//     sig: 1135,
//     net: "us",
//     code: "2000jlfv",
//     ids: ",at00pnbol0,pt19053000,us2000jlfv,",
//     sources: ",at,pt,us,",
//     types: ",dyfi,finite-fault,general-text,geoserve,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",
//     nst: null,
//     dmin: 2.073,
//     rms: 1.3,
//     gap: 37,
//     magType: "mww",
//     type: "earthquake",
//     title: "M 7.5 - 115km ESE of Palora, Ecuador"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -77.0231,
//     -2.199,
//     132.36
//     ]
//     },
//     id: "us2000jlfv"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 6.3,
//     place: "48km NW of Namatanai, Papua New Guinea",
//     time: 1550414155830,
//     updated: 1550601033040,
//     tz: 600,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/us2000jj68",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000jj68.geojson",
//     felt: null,
//     cdi: null,
//     mmi: 3.05,
//     alert: "green",
//     status: "reviewed",
//     tsunami: 1,
//     sig: 611,
//     net: "us",
//     code: "2000jj68",
//     ids: ",us2000jj68,",
//     sources: ",us,",
//     types: ",geoserve,ground-failure,losspager,moment-tensor,origin,phase-data,shakemap,",
//     nst: null,
//     dmin: 0.842,
//     rms: 1.44,
//     gap: 21,
//     magType: "mww",
//     type: "earthquake",
//     title: "M 6.3 - 48km NW of Namatanai, Papua New Guinea"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     152.1346,
//     -3.3439,
//     368.16
//     ]
//     },
//     id: "us2000jj68"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 3.7,
//     place: "6km SSW of Yountville, CA",
//     time: 1550397324160,
//     updated: 1550850531517,
//     tz: -480,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc73143141",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73143141.geojson",
//     felt: 3563,
//     cdi: 4.1,
//     mmi: 5.1,
//     alert: null,
//     status: "reviewed",
//     tsunami: 0,
//     sig: 621,
//     net: "nc",
//     code: "73143141",
//     ids: ",nc73143141,us2000jj3t,",
//     sources: ",nc,us,",
//     types: ",dyfi,focal-mechanism,geoserve,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,",
//     nst: 199,
//     dmin: 0.04764,
//     rms: 0.13,
//     gap: 38,
//     magType: "mw",
//     type: "earthquake",
//     title: "M 3.7 - 6km SSW of Yountville, CA"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -122.3983333,
//     38.3515,
//     7.99
//     ]
//     },
//     id: "nc73143141"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 3.7,
//     place: "2km S of Bluffdale, Utah",
//     time: 1550232591250,
//     updated: 1550863806984,
//     tz: -420,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/uu60312667",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/uu60312667.geojson",
//     felt: 8805,
//     cdi: 4.7,
//     mmi: 3.78,
//     alert: null,
//     status: "reviewed",
//     tsunami: 0,
//     sig: 681,
//     net: "uu",
//     code: "60312667",
//     ids: ",uu60312667,us2000jief,",
//     sources: ",uu,us,",
//     types: ",dyfi,geoserve,moment-tensor,origin,phase-data,shakemap,",
//     nst: 51,
//     dmin: 0.009325,
//     rms: 0.21,
//     gap: 28,
//     magType: "ml",
//     type: "earthquake",
//     title: "M 3.7 - 2km S of Bluffdale, Utah"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -111.948,
//     40.4631667,
//     8.59
//     ]
//     },
//     id: "uu60312667"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 4.39,
//     place: "13km ESE of Blue Lake, CA",
//     time: 1549477381570,
//     updated: 1549994869329,
//     tz: -480,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc73138600",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73138600.geojson",
//     felt: 834,
//     cdi: 3.8,
//     mmi: 4.76,
//     alert: "green",
//     status: "reviewed",
//     tsunami: 1,
//     sig: 613,
//     net: "nc",
//     code: "73138600",
//     ids: ",at00pmioec,nc73138600,us2000je9x,",
//     sources: ",at,nc,us,",
//     types: ",dyfi,focal-mechanism,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,",
//     nst: 32,
//     dmin: 0.08586,
//     rms: 0.13,
//     gap: 67,
//     magType: "mw",
//     type: "earthquake",
//     title: "M 4.4 - 13km ESE of Blue Lake, CA"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -123.8395,
//     40.8465,
//     25.83
//     ]
//     },
//     id: "nc73138600"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 5.3,
//     place: "31km SSE of Boca de Yuma, Dominican Republic",
//     time: 1549290828810,
//     updated: 1549599366707,
//     tz: -240,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/pr2019035005",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/pr2019035005.geojson",
//     felt: 514,
//     cdi: 4.7,
//     mmi: null,
//     alert: null,
//     status: "reviewed",
//     tsunami: 0,
//     sig: 674,
//     net: "pr",
//     code: "2019035005",
//     ids: ",pt19035050,us2000jd4z,pr2019035005,",
//     sources: ",pt,us,pr,",
//     types: ",dyfi,geoserve,moment-tensor,origin,phase-data,",
//     nst: 22,
//     dmin: 0.4149,
//     rms: 0.8,
//     gap: 189,
//     magType: "ml",
//     type: "earthquake",
//     title: "M 5.3 - 31km SSE of Boca de Yuma, Dominican Republic"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -68.5523,
//     18.1358,
//     74
//     ]
//     },
//     id: "pr2019035005"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 6.6,
//     place: "14km ENE of Puerto Madero, Mexico",
//     time: 1549037653090,
//     updated: 1549519876344,
//     tz: -360,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/us2000jbub",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000jbub.geojson",
//     felt: 481,
//     cdi: 6,
//     mmi: 6.19,
//     alert: "yellow",
//     status: "reviewed",
//     tsunami: 1,
//     sig: 959,
//     net: "us",
//     code: "2000jbub",
//     ids: ",at00pm993p,pt19032000,us2000jbub,",
//     sources: ",at,pt,us,",
//     types: ",dyfi,geoserve,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",
//     nst: null,
//     dmin: 0.63,
//     rms: 1.33,
//     gap: 135,
//     magType: "mww",
//     type: "earthquake",
//     title: "M 6.6 - 14km ENE of Puerto Madero, Mexico"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -92.2981,
//     14.7628,
//     67.93
//     ]
//     },
//     id: "us2000jbub"
//     },
//     {
//     type: "Feature",
//     properties: {
//     mag: 5.6,
//     place: "13km WNW of Santa Maria, Colombia",
//     time: 1548505947220,
//     updated: 1549490052093,
//     tz: -300,
//     url: "https://earthquake.usgs.gov/earthquakes/eventpage/us2000j967",
//     detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000j967.geojson",
//     felt: 358,
//     cdi: 5,
//     mmi: 6,
//     alert: "green",
//     status: "reviewed",
//     tsunami: 0,
//     sig: 661,
//     net: "us",
//     code: "2000j967",
//     ids: ",us2000j967,",
//     sources: ",us,",
//     types: ",dyfi,geoserve,losspager,moment-tensor,origin,phase-data,shakemap,",
//     nst: null,
//     dmin: 2.341,
//     rms: 1.14,
//     gap: 80,
//     magType: "mww",
//     type: "earthquake",
//     title: "M 5.6 - 13km WNW of Santa Maria, Colombia"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -75.7693,
//     2.9902,
//     10
//     ]
//     },
//     id: "us2000j967"
//     }
//     ],
//     bbox: [
//     -123.8395,
//     -3.3439,
//     7.99,
//     152.1346,
//     40.8465,
//     368.16
//     ]
//     }')'


// quake_coordinates = [[-75.7693, 2.9902],
//                     [-92.2981, 14.7628],
//                     [-68.5523, 18.1358],
//                     [-123.8395, 40.8465]
//                     [-111.948, 40.4631667]
//                     [-122.3983333, 38.3515]
//                     [152.1346, -3.3439,]
//                     [-77.0231, -2.199,]]

// for x in quake_coordinates{
//         L.circle(x, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//     }).addTo(mymap);
// }


