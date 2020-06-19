$(document).ready(function () {
  $('#dropdown-dienThoai').hover(function () {
    // over
    $('#contentDropdownOfDienThoai').dropdown('show');
  }, function () {
    // out
    $('#contentDropdownOfDienThoai').dropdown('hide');
  }
  );

  $('#dropdown-laptop').hover(function () {
    // over
    $('#contentDropdownOfLaptop').dropdown('show');
  }, function () {
    // out
    $('#contentDropdownOfLaptop').dropdown('hide');
  }
  );

  $('#dropdown-dongho').hover(function () {
    // over
    $('#contentDropdownOfdongHo').dropdown('show');
  }, function () {
    // out
    $('#contentDropdownOfdongHo').dropdown('hide');
  }
  );

  $('#dropdown-laptop').width($('#dropdown-dienThoai').width());
  $('#dropdown-dongho').width($('#dropdown-dienThoai').width());



});