//抓取按鈕節點
const loginbtn = document.querySelector("#loginbtn");
const singbtn = document.querySelector("#singbtn");

//取得所有學生資料
let allStudents;
fetch("http://localhost:8080/getAllStudent", {
  method: "POST",
})
  .then((response) => response.json())
  .then((data) => {
    allStudents = data;
    console.log(allStudents);
  })
  .catch((error) => console.log("錯誤訊息" + error));

//取得輸入框節點
const studentID = document.querySelector("#Student_ID");
const studentName = document.querySelector("#Student_Name");
loginbtn.addEventListener("click", function () {
  console.log(studentID.value);
  console.log(studentName.value);
  // 在所有學生中尋找該學生
  const student = allStudents.find(function (i) {
    return (
      i.id === parseInt(studentID.value) && i.studentname === studentName.value
    );
  });
  console.log(student);
  if (student) {
    // 登錄成功，跳轉到某個頁面
    window.location.href = "./updele.html";
  } else {
    // 登錄失敗，顯示訊息
    alert("尚無此資料");
  }
});

//進入註冊頁面
singbtn.addEventListener("click", function () {
  window.location.href = "./updele.html";
});
