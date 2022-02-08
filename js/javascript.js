/* function initialize() {
    var input = document.getElementById('from_places');
    new google.maps.places.Autocomplete(input);
  } */

var emailBody ='';

   
    // add input listeners
    google.maps.event.addDomListener(window, 'load', function () {
        var from_places = new google.maps.places.Autocomplete(document.getElementById('from_places'));
        console.log(from_places+'1');
        var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'));
        console.log(to_places+'2');
        google.maps.event.addListener(from_places, 'place_changed', function () {
            var from_place = from_places.getPlace();
            var from_address = from_place.formatted_address;
            $('#origin').val(from_address);
        });

        google.maps.event.addListener(to_places, 'place_changed', function () {
            var to_place = to_places.getPlace();
            var to_address = to_place.formatted_address;
            $('#destination').val(to_address);
        });

    });
    // calculate distance
    function calculateDistance() {
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
                // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
                avoidHighways: false,
                avoidTolls: false
            }, callback);
    }
    // get distance results
    function callback(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
            $('#result').html(err);
        } else {
           
            var origin = response.originAddresses[0];
            var destination = response.destinationAddresses[0];
            if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                $('#result').html("Không có đường nào giữa "  + origin + " và " + destination);
            } else {
                var distance = response.rows[0].elements[0].distance;
                var duration = response.rows[0].elements[0].duration;
                console.log(response.rows[0].elements[0].distance);
                var distance_in_kilo = distance.value / 1000; // the kilom
                var distance_in_mile = distance.value / 1609.34; // the mile
                var duration_text = duration.text;
                var duration_value = duration.value;
                var xe = document.getElementById("select_car");
                var xecho = xe.value;
               /*  $('#in_mile').text(distance_in_mile.toFixed(2));
                $('#in_kilo').text((distance_in_kilo.toFixed(2)*parseInt(xecho)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                $('#duration_text').text(duration_text);
                $('#duration_value').text(duration_value);
                $('#from').text(origin);
                $('#to').text(destination); */
                var loaixe = xecho==12000 ? "Xe 4 chỗ" : "Xe 7 chỗ"
                $('#diem_don').text(origin);
                $('#diem_den').text(destination);
                $('#loai_xe').text(loaixe);
                $('#thoi_gian').text(document.getElementById("time_start").value);
                $('#so_tien').text((distance_in_kilo.toFixed(2)*parseInt(xecho)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                
                emailBody += "Điểm đón: " + origin
					+ "<br />Điểm đến: "  + destination
					+ "<br />Loại xe: "  + loaixe
                    + "<br />Thời gian: "  + document.getElementById("time_start").value
					+ "<br />Số tiền: "  + (distance_in_kilo.toFixed(2)*parseInt(xecho)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            
            }
        }
    }
    // print results on submit the form
    $('#distance_form').submit(function(e){
        e.preventDefault();
        calculateDistance();
    });

    var _0x26de=["\x42\u1EA1\x6E\x20\u0111\xE3\x20\u0111\u1EB7\x74\x20\x78\x65\x20\x74\x68\xE0\x6E\x68\x20\x63\xF4\x6E\x67\x21","\x74\x68\x65\x6E","\x73\x6D\x74\x70\x2E\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x71\x75\x61\x6E\x74\x72\x69\x2E\x6C\x75\x78\x75\x72\x79\x6C\x65\x67\x65\x6E\x64\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x31\x48\x61\x6E\x68\x70\x68\x61\x63","\x6C\x65\x74\x68\x61\x6E\x68\x74\x72\x75\x6E\x67\x31\x32\x30\x39\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x4C\x55\x58\x55\x52\x59\x20\x4C\x45\x47\x45\x4E\x44\x20\x2D\x20\u0110\u1EB6\x54\x20\x58\x45","\x3C\x62\x72\x20\x2F\x3E\x20\x54\xEA\x6E\x20\x6B\x68\xE1\x63\x68\x20\x68\xE0\x6E\x67\x3A\x20","\x76\x61\x6C\x75\x65","\x46\x75\x6C\x6C\x4E\x61\x6D\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x3C\x62\x72\x20\x2F\x3E\x20\x53\u1ED1\x20\u0111\x69\u1EC7\x6E\x20\x74\x68\x6F\u1EA1\x69\x3A\x20","\x50\x68\x6F\x6E\x65","\x3C\x62\x72\x20\x2F\x3E\x20\x54\x68\xF4\x6E\x67\x20\x74\x69\x6E\x20\x74\x68\xEA\x6D\x3A\x20","\x4E\x6F\x74\x65","\x73\x65\x6E\x64"];function sendEmail(){Email[_0x26de[15]]({Host:_0x26de[2],Username:_0x26de[3],Password:_0x26de[4],To:_0x26de[5],From:_0x26de[3],Subject:_0x26de[6],Body:emailBody+= _0x26de[7]+ document[_0x26de[10]](_0x26de[9])[_0x26de[8]]+ _0x26de[11]+ document[_0x26de[10]](_0x26de[12])[_0x26de[8]]+ _0x26de[13]+ document[_0x26de[10]](_0x26de[14])[_0x26de[8]]})[_0x26de[1]](function(_0x5c4fx2){alert(_0x26de[0])})}

   