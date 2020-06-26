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
        '<a class="col-3 " href="chiTietDienThoai.html?id=' +
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
       console.log('val',$(this).height());
       if($(this).height() > maxHeight){
         maxHeight = $(this).height()
       }
    });

    $(str).height(maxHeight);
  }

  setMaxHeight('.card-laptop');
  setMaxHeight('.card-dien-thoai');

  const setContentOfItemDienThoai = (type) => {
    dataIphone = dataDienThoai.filter(item => {
      return item.hangSanXuat == type
    })
  
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
      )
    })

    setMaxHeight('.card-dien-thoai');
  }

  $('#btnIphone').click((e) => {
    e.preventDefault();
    $('.dien_thoai a.nav-link').each((index, value) => {
      console.log(value);
      $('.dien_thoai a').removeClass('active-of-item');
    })
    $('#btnIphone').addClass('active-of-item');
    $('.item_dien_thoai').empty()

    setContentOfItemDienThoai('iPhone (Apple)');

  })
  $('#btnSamsung').click((e) => {
    e.preventDefault();
    $('.dien_thoai a.nav-link').each((index, value) => {
      console.log(value);
      $('.dien_thoai a').removeClass('active-of-item');
    })
    $('#btnSamsung').addClass('active-of-item');
    $('.item_dien_thoai').empty()

    setContentOfItemDienThoai('Samsung');

  })
  $('#btnOppo').click((e) => {
    e.preventDefault();
    $('.dien_thoai a.nav-link').each((index, value) => {
      console.log(value);
      $('.dien_thoai a').removeClass('active-of-item');
    })
    $('#btnOppo').addClass('active-of-item');
    $('.item_dien_thoai').empty()

    setContentOfItemDienThoai('OPPO');

  })
  $('#btnRealme').click((e) => {
    e.preventDefault();
    $('.dien_thoai a.nav-link').each((index, value) => {
      console.log(value);
      $('.dien_thoai a').removeClass('active-of-item');
    })
    $('#btnRealme').addClass('active-of-item');
    $('.item_dien_thoai').empty()

    setContentOfItemDienThoai('Realme');

  })

});
