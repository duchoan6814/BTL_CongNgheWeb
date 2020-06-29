$(document).ready(() => {
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  let idOfItem = getUrlParameter('id')
  console.log(idOfItem);

  $("#dropdown-dienThoai").hover(
    function () {
      // over
      $("#contentDropdownOfDienThoai").dropdown("show");
    },
    function () {
      // out
      $("#contentDropdownOfDienThoai").dropdown("hide");
    }
  );

  $("#dropdown-laptop").hover(
    function () {
      // over
      $("#contentDropdownOfLaptop").dropdown("show");
    },
    function () {
      // out
      $("#contentDropdownOfLaptop").dropdown("hide");
    }
  );

  dataDetail = dataDienThoai.find(item => {
    return item.id == idOfItem
  })

  $('.ten_dien_thoai h3').text(dataDetail.tenDienThoai)
  $('.gia h4').text(dataDetail.gia)
  $('.hinh_anh_dien_thoai').html('<img class="img-fluid" src="data:image/png;base64,'+dataDetail.hinh+'" alt=""><p class="text-center mt-4">hình ảnh sản phẩm thực tế</p>')
  $('#manHinh').text(dataDetail.manHinh.split(":")[1])
  $('#heDieuHanh').text(dataDetail.heDieuHanh.split(":")[1])
  $('#cameraSau').text(dataDetail.cameraSau.split(":")[1])
  $('#cameraTruoc').text(dataDetail.cameraTruoc.split(":")[1])
  $('#CPU').text(dataDetail.cpu.split(":")[1])
  $('#RAM').text(dataDetail.ram.split(":")[1])
  $('#ROM').text(dataDetail.boNhoTrong.split(":")[1])
  $('#SIM').text(dataDetail.sim.split(":")[1])
  $('#PIN').text(dataDetail.pin.split(":")[1])
  $('.collapse p').text(dataDetail.noidung)
  
});
