document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#menu ul li a");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 링크 클릭 동작을 막음

      // 클릭한 메뉴의 ID 값을 가져옵니다.
      const menuId = e.target.id;

      // 각 메뉴에 대한 URL을 정의합니다.
      let pageURL = "https://www.naver.com"; // 기본 페이지 URL
      if (menuId === "menu1") {
        pageURL = "https://www.naver.com"; // 첫 번째 메뉴 항목의 URL
      } else if (menuId === "menu2") {
        pageURL = "https://www.wku.ac.kr"; // 두 번째 메뉴 항목의 URL (원광대학교 홈페이지)
      } else if (menuId === "menu3") {
        pageURL = "page3.html"; // 세 번째 메뉴 항목의 URL
      } else if (menuId === "menu4") {
        pageURL = "page4.html"; // 네 번째 메뉴 항목의 URL
      }

      // 새로운 페이지로 이동합니다.
      if (pageURL !== "") {
        window.location.href = pageURL;
      }
    });
  });
});
