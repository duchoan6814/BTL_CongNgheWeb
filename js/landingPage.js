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

  dataDienThoai.map(
    (item, index) =>
      index < 8 &&
      $(".item_dien_thoai").append(
        '<a class="col-3 " target="_blank" href="chiTietDienThoai.html?id=' +
          item.id +
          '"><div class="item-cart"><div class="card card-dien-thoai"><img class="card-img-top" src="data:image/png;base64,' +
          item.hinh +
          '" alt=""><div class="card-body"><h4 class="card-title">' +
          item.tenDienThoai.split(" ").splice(2).join(" ") +
          '</h4><p class="card-text">' +
          item.gia +
          "</p></div></div></div></a>"
      )
  );
  // $('.dien_thoai').append('<div class="col-3 item-cart"><div class="card"><img class="card-img-top" src="https://via.placeholder.com/150" alt=""><div class="card-body"><h4 class="card-title">Chao anh em</h4><p class="card-text">Text</p></div></div></div>');
  dataLaptop.splice(0, 8).map((item) => {
    $(".item-laptop").append(
      '<a class="col-3" href=#><div class="item-cart"><div class="card card-laptop"><img class="card-img-top" src="data:image/png;base64,' +
        item.hinh +
        ' alt=""><div class="card-body"><h4 class="card-title">' +
        item.tenLapTop.split(" ").slice(1).join() +
        '</h4><p class="card-text">' +
        item.gia +
        "</p></div></div></div></a>"
    );
  });

  const setMaxHeight = (str) => {
    let maxHeight = 0;
    $(str).each(function (indexInArray, valueOfElement) {
      console.log("val", $(this).height());
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(str).height(maxHeight);
  };

  setMaxHeight(".card-laptop");
  setMaxHeight(".card-dien-thoai");

  const setContentOfItemDienThoai = (type) => {
    dataIphone = dataDienThoai.filter((item) => {
      return item.hangSanXuat == type;
    });

    console.log(dataIphone);

    dataIphone.map((item, index) => {
      index < 8 &&
        $(".item_dien_thoai").append(
          '<a class="col-3 " href="chiTietDienThoai.html?id=' +
            item.id +
            '"><div class="item-cart"><div class="card card-dien-thoai"><img class="card-img-top" src="data:image/png;base64,' +
            item.hinh +
            '" alt=""><div class="card-body"><h4 class="card-title">' +
            item.tenDienThoai.split(" ").splice(2).join(" ") +
            '</h4><p class="card-text">' +
            item.gia +
            "</p></div></div></div></a>"
        );
    });

    setMaxHeight(".card-dien-thoai");
  };

  $("#btnIphone").click((e) => {
    e.preventDefault();
    $(".dien_thoai a").removeClass("active-of-item");
    $("#btnIphone").addClass("active-of-item");
    $(".item_dien_thoai").empty();

    setContentOfItemDienThoai("iPhone (Apple)");
  });
  $("#btnSamsung").click((e) => {
    e.preventDefault();
    $(".dien_thoai a").removeClass("active-of-item");
    $("#btnSamsung").addClass("active-of-item");
    $(".item_dien_thoai").empty();

    setContentOfItemDienThoai("Samsung");
  });
  $("#btnOppo").click((e) => {
    e.preventDefault();
    $(".dien_thoai a").removeClass("active-of-item");
    $("#btnOppo").addClass("active-of-item");
    $(".item_dien_thoai").empty();

    setContentOfItemDienThoai("OPPO");
  });
  $("#btnRealme").click((e) => {
    e.preventDefault();
    $(".dien_thoai a").removeClass("active-of-item");
    $("#btnRealme").addClass("active-of-item");
    $(".item_dien_thoai").empty();

    setContentOfItemDienThoai("Realme");
  });

  const setContentOfItemLaptop = (type) => {
    dataTheLoaiLaptop = dataLaptop.filter((item) => {
      return item.hangSanXuat == type;
    });

    console.log(dataTheLoaiLaptop);

    dataTheLoaiLaptop.map((item, index) => {
      index < 8 &&
        $(".item-laptop").append(
          '<a class="col-3 " href="chiTietDienThoai.html?id=' +
            item.id +
            '"><div class="item-cart"><div class="card card-laptop"><img class="card-img-top" src="data:image/png;base64,' +
            item.hinh +
            '" alt=""><div class="card-body"><h4 class="card-title">' +
            item.tenLapTop.split(" ").splice(1).join(" ") +
            '</h4><p class="card-text">' +
            item.gia +
            "</p></div></div></div></a>"
        );
    });

    setMaxHeight(".card-laptop");
  };

  $("#btnDell").click((e) => {
    e.preventDefault();
    $(".laptop a").removeClass("active-of-item");
    $("#btnDell").addClass("active-of-item");
    $(".item-laptop").empty();

    setContentOfItemLaptop("Dell");
  });
  $("#btnMacBook").click((e) => {
    e.preventDefault();
    $(".laptop a").removeClass("active-of-item");
    $("#btnMacBook").addClass("active-of-item");
    $(".item-laptop").empty();

    setContentOfItemLaptop("MacBook");
  });
  $("#btnAsus").click((e) => {
    e.preventDefault();
    $(".laptop a").removeClass("active-of-item");
    $("#btnAsus").addClass("active-of-item");
    $(".item-laptop").empty();

    setContentOfItemLaptop("Asus");
  });
  $("#btnAcer").click((e) => {
    e.preventDefault();
    $(".laptop a").removeClass("active-of-item");
    $("#btnAcer").addClass("active-of-item");
    $(".item-laptop").empty();

    setContentOfItemLaptop("Acer");
  });

  $("#formDangNhap").submit(function (e) {
    e.preventDefault();
    let username = $("#exampleInputEmail1").val();
    let password = $("#exampleInputPassword1").val();

    let taiKhoan = listTaiKhoan.find((item) => item.username == username);

    if (taiKhoan)
      if (taiKhoan.password == password) {
        console.log("dang nhap thanh cong");
        $(".right-nav").empty();
        $(".right-nav").append(
          '<li class="nav-item "><img src="../icon/gioHang-icon.svg" alt=""></li><li class="nav-item"><a href="#"><img src="../icon/person.svg" alt=""></a></li>'
        );
        $("#modalLogin").modal("hide");
      } else {
        console.log("mat khau khong chinh xac");
        $("#thongBaoPasswordDangNhap").text("Mật khẩu không đúng.");
      }
    else {
      console.log("ten tai khoan khong ton tai");
      $("#emailDangNhap").text("Tài khoản không tồn tại.");
    }
  });

  $("#carouselSanPhamBanChay .carousel-item").each(function (
    indexInArray,
    valueOfElement
  ) {
    $(this).empty();
    let listItem = "";

    dataDienThoai
      .slice((indexInArray + 2 - 1) * 4 - 1, (indexInArray + 2 - 1) * 4 - 1 + 4)
      .map((item) => {
        let tempChar =
          '<a href=""# class="col"><div class="card item-ban-chay"><img class="card-img-top" src="data:image/png;base64,' +
          item.hinh +
          '" alt=""><div class="card-body"><h4 class="card-title">' +
          item.tenDienThoai +
          '</h4><p class="card-text">' +
          item.gia +
          "</p></div></div></a>";
        listItem += tempChar;
      });

    $(this).append('<div class="row">' + listItem + "</div>");

    console.log(valueOfElement);
  });

  setMaxHeight(".item-ban-chay");
});
