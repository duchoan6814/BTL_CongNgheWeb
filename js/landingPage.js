$(document).ready(function () {
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

  $("#dropdown-dongho").hover(
    function () {
      // over
      $("#contentDropdownOfdongHo").dropdown("show");
    },
    function () {
      // out
      $("#contentDropdownOfdongHo").dropdown("hide");
    }
  );

  $("#dropdown-laptop").width($("#dropdown-dienThoai").width());
  $("#dropdown-dongho").width($("#dropdown-dienThoai").width());

  fetch("../dataMock/dienThoai.json")
    .then((response) => response.json())
    .then((json) => {
      json.map((item, index) => index < 8 ? $('.item_dien_thoai').append('<a class="col-3 " href="chiTietDienThoai.html?id='+item.id+'"><div class="item-cart"><div class="card"><img class="card-img-top" src="data:image/png;base64,'+item.hinh+'" alt=""><div class="card-body"><h4 class="card-title">'+item.tenDienThoai.split(" ").splice(2).join(" ")+'</h4><p class="card-text">'+item.gia+'</p></div></div></div></a>'): pass)
      // $('.dien_thoai').append('<div class="col-3 item-cart"><div class="card"><img class="card-img-top" src="https://via.placeholder.com/150" alt=""><div class="card-body"><h4 class="card-title">Chao anh em</h4><p class="card-text">Text</p></div></div></div>');
    });

});
