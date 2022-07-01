var emailBody = '';
function callback(response, status) {
    var xe = document.getElementById("select_car");
    var origin = $('#from_places').val();
    var destination = $('#to_places').val()
    var xecho = xe.value;
    var loaixe = xecho == 14000 ? "Xe 4 chỗ" : "Xe 7 chỗ";
    $('#diem_don').text(origin);
    $('#diem_den').text(destination);
    $('#loai_xe').text(loaixe);
    $('#thoi_gian').text(document.getElementById("time_start").value);
    $('#so_tien').text((parseInt(xecho)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + '/km');

    emailBody += "Điểm đón: " + origin
        + "<br />Điểm đến: " + destination
        + "<br />Loại xe: " + loaixe
        + "<br />Thời gian: " + document.getElementById("time_start").value
        + "<br />Số tiền: " + (parseInt(xecho)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + '/km';
}

// print results on submit the form
$('#distance_form').submit(function (e) {
    e.preventDefault();
    callback();
});

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "quantri.luxurylegend@gmail.com",
        Password: "mijfzfamsekrrwyy",
        To: "lethanhtrung1209@gmail.com",
        From: "quantri.luxurylegend@gmail.com",
        Subject: "LUXURY LEGEND - ĐẶT XE",
        Body: emailBody += "<br /> Tên khách hàng: " + document.getElementById("FullName").value + "<br /> Số điện thoại: " + document.getElementById("Phone").value + "<br /> Thông tin thêm: " + document.getElementById("Note").value
    }).then(function (_0x5c4fx2) {
        alert("Bạn đã đặt xe thành công!")
    })
}

