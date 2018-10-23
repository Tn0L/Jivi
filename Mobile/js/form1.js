$('.contact-form-control-phone').keydown(function(e) {
  if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 35 && event.keyCode <= 37) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 45 || event.keyCode == 8 ) return true;
  else return false;
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn1").style.display = "none" ;
  } else {
    document.getElementById("nextBtn1").style.display = "inline";
  }
  if (n == (x.length - 3)) {
    document.getElementById("submit").style.display = "none" ;
  }
  else if(n == (x.length - 4)){
    document.getElementById("submit").style.display = "none" ;
  }
  else {
    document.getElementById("submit").style.display = "inline";
  }
 
  
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("form1").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

var markers = new Array();
var markersIds = new Array();
var geocoder = new google.maps.Geocoder();

function geocodeAddress(address, action, map,markerId, markerTitle, markerIcon, markerShadow, windowText, showInfoWindow, draggableMarker) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if(action =='setCenter'){
          setCenterMap(results[0].geometry.location);
        }
        if(action =='setMarker'){
          //return results[0].geometry.location;
          setMarker(map,markerId,results[0].geometry.location,markerTitle, markerIcon, markerShadow,windowText, showInfoWindow, draggableMarker);
        }
        if(action =='addPolyline'){
          return results[0].geometry.location;
        }
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
        return null;
      }
    });
}
var initialLocation;
var browserSupportFlag =  new Boolean();
var map_canvas;
var myOptions = {
  zoom: 12,
  disableDefaultUI: !false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  

};
map_canvas = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

function setCenterMap(position){
map_canvas.setCenter(position);
}
setCenterMap(new google.maps.LatLng(10.8258289, 106.6400068));
function localize(){
    if(navigator.geolocation) { // Try W3C Geolocation method (Preferred)
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
          initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          map_canvas.setCenter(initialLocation);}, function() {
          handleNoGeolocation(browserSupportFlag);
        });

    } else if (google.gears) { // Try Google Gears Geolocation
  browserSupportFlag = true;
  var geo = google.gears.factory.create('beta.geolocation');
  geo.getCurrentPosition(function(position) {
    initialLocation = new google.maps.LatLng(position.latitude,position.longitude);
    map_canvas.setCenter(initialLocation);}, function() {
          handleNoGeolocation(browserSupportFlag);
        });
    } else {
        // Browser doesn't support Geolocation
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      initialLocation = noLocation;
      contentString = "Error: The Geolocation service failed.";
    } else {
      initialLocation = noLocation;
      contentString = "Error: Your browser doesn't support geolocation.";
    }
    map_canvas.setCenter(initialLocation);
    map_canvas.setZoom(3);
}
function setMarker(map, id, position, title, icon, shadow, content, showInfoWindow, draggableMarker){
var index = markers.length;
markersIds[markersIds.length] = id;
title = title.replace('<br/>', '\n')
title = title.replace('<br/>', '\n')
markers[index] = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        shadow: shadow,
        draggable: draggableMarker,
        title:title,
        windowText: content
    });
   if(content != '' && showInfoWindow){
     var infowindow = new google.maps.InfoWindow({
          content: content
      });
      google.maps.event.addListener(markers[index], 'click', function() {
        for(w=0;w<markers.length;w++){
          infowindow.setContent(content);
          //infowindow.open(map,this)
        }
        //document.getElementById('data-label').html(content)
        //$('#data-label').html(content)
        // use ajax and paste the 'ID' to get the data from database and load into form
        //document.getElementById('job_chunha').innerText = content['chunha']
        var x = document.getElementById('form');
        if (x.style.display === 'none' ||x.style.display === '') {
          x.style.display = 'block';
          $('#form').modal()
          var vals = this.windowText.split('|')
          document.getElementById('job_mucluong').innerText = vals[0] + ' triệu '
          document.getElementById('job_diachi').innerText = vals[1]
          document.getElementById('job_olai').innerText = vals[2]
          document.getElementById('job_phone').innerText = vals[3]
          document.getElementById('type1').style.background = vals[4]
          document.getElementById('tx1').innerText = vals[5]
          document.getElementById('type2').style.background = vals[6]
          document.getElementById('tx2').innerText = vals[7]
          document.getElementById('job_phuong').innerText = 'Phường ' + vals[8]
          document.getElementById('job_quan').innerText = 'Quận ' + vals[9]
          document.getElementById('job_city').innerText = vals[10]
        } else {
          x.style.display = 'none';
          $('#form').modal()
        }
      });
    }
    if (draggableMarker) {
      google.maps.event.addListener(markers[index], 'dragend', function(event) {
        updateCoordinatesDisplayed(id, event.latLng.lat(), event.latLng.lng());
      });
    }
 }
  // An input with an id of 'latitude_<id>' and 'longitude_<id>' will be set, only if it exist
  function updateCoordinatesDisplayed(markerId, latitude, longitude) {
    if (document.getElementById('latitude_' + markerId)) {
      document.getElementById('latitude_' + markerId).value = latitude;
    }
    if (document.getElementById('longitude_' + markerId)) {
      document.getElementById('longitude_' + markerId).value = longitude;
    }
  }
 
  // remove a marker from map
function removeMarker(id){
var index = markersIds.indexOf(String(id));
if (index > -1) {
markers[index].setMap(null);
return true;
}
return false;
}
// add a marker back to map
function addMarker(id, map){
var index = markersIds.indexOf(String(id));
if (index > -1) {
markers[index].setMap(map);
return true;
}
return false;
}         
setMarker(map_canvas,'1',new google.maps.LatLng(10.82582425, 106.6402380),'Tên cv: dọn vệ sinh nhà cửa<br/>Miêu tả: dọn vệ sinh nhà cửa 3 lần/tuần. Nhà nhỏ 50m2.<br/>Mức lương: < 4 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','< 4| Bàu Cát|không|0123456789|#339af0|Giúp Việc Nhà| white|1|14|Tân Bình|Hồ Chí Minh', true,true)
setMarker(map_canvas,'2',new google.maps.LatLng(10.82582835, 106.6400162),'Tên cv: dọn vệ sinh nhà cửa<br/>Miêu tả: dọn vệ sinh nhà cửa 3 lần/tuần. Nhà nhỏ 50m2.<br/>Mức lương: 6 - 9 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','6 - 9| Bàu Cát|không|0123456789|#00b13f| Chăm Em Bé|white|1|7 |Tân Bình|Hồ Chí Minh', true,true)
setMarker(map_canvas,'3',new google.maps.LatLng(10.82582855, 106.6403074),'Tên cv: dọn vệ sinh nhà cửa -căn hộ chung cư<br/>Miêu tả: dọn vệ sinh nhà cửa 3 lần/tuần. Nhà nhỏ 50m2. Chung cư vệ sinh, thoáng mát. Nhà thường xuyên đi làm nên cũng không bừa bộn<br/>Mức lương: 4-6 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','4 - 6|Trương Công Định |có|0123456789|#339af0|Giúp Việc Nhà|#00b13f| Chăm Em Bé|15|Quận 1 | Hồ Chí Minh', true,true)
setMarker(map_canvas,'4',new google.maps.LatLng(10.8490541, 106.6386416),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi  t sau<br/>Mức lương: < 4  (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','< 4| 51|không|0123456789| 	#DAA520| Chăm Người Già | White|1|14|Bình Thạnh|Hồ Chí Minh|Hà Đông|Hà Nội', true,true)
setMarker(map_canvas,'5',new google.maps.LatLng(10.8134343, 106.7547736),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: < 4 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','< 4|cầu Rạch Chiếc|không|0123456789|	#DAA520| Chăm Người bệnh | white|1|10|3|Hồ Chí Minh', true,true)
setMarker(map_canvas,'6',new google.maps.LatLng(10.8984604, 106.4568319),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: > 9 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png',' > 9| Mỹ Hạnh Bắc|có|0123456789|#339af0|Giúp Việc Nhà|	#DAA520| Chăm Người Bệnh|10|Tân Bình | Hồ Chí Minh', true,true)
setMarker(map_canvas,'7',new google.maps.LatLng(10.8356635, 106.6564436),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: 6 - 9 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','6 - 9 |chợ Hạnh Thông Tây|tùy ý|0123456789|#339af0|Giúp Việc Nhà|	#DAA520| Chăm Người Già|10|Tân Bình | Hồ Chí Minh', true,true) 
setMarker(map_canvas,'8',new google.maps.LatLng(10.8009087, 106.6619839),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: 4 - 6 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','4 - 6 |Bàu Cát|tùy ý|0123456789|#339af0|Giúp Việc Nhà|	#DAA520| Chăm Người Bệnh|10|Tân Bình | Hồ Chí Minh', true,true)
setMarker(map_canvas,'9',new google.maps.LatLng(10.8207027, 106.7113705),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: < 4 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','< 4|cầu Bình Triệu| không|0123456789|#339af0|Giúp Việc Nhà|	#DAA520| Chăm Người Bệnh|10|Tân Bình | Hồ Chí Minh', true,true)
setMarker(map_canvas,'10',new google.maps.LatLng(10.7276272, 106.6855461),'Tên cv: giúp việc nhà<br/>Miêu tả: thảo luận chi tiết sau<br/>Mức lương: > 9 (triệu)','http://maps.google.com/mapfiles/marker.png','http://maps.google.com/mapfiles/shadow50.png','> 9|Lê Văn Lương| có|0123456789|#339af0|Giúp Việc Nhà| white|1|10|Tân Bình | Hồ Chí Minh', true,true)
