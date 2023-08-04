// 준비 이벤트
// (html 코드를 다 잃고 나서 실행해줘)
// $(function).ready(function(){})

$(function () {

  // modal
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").click(function () {
    // a태그의 링크 값 없애기
   e.preventDefault();
   
    // #modal 을 찾아서 display:flex변경해줘
    $("#modal").css('diplay', "flex");
    // $("#modal").show();
  });
  // .modal-box .btn-close 을 클릭했을 떄
  $(".modal-box .btn-close").on("click focus", fuction () {
    // #modal 안보이게 해줘 
    $("#modal").hide();
  });
});