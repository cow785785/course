const stuid = document.querySelector("#stuid");
const stuname = document.querySelector("#stuname");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let body = {
    id: `${stuid.value}`,
    studentname: `${stuname.value}`,
  };
  fetch("http://localhost:8080/addStudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("失敗。");
    })
    .then(function (data) {
      alert(
        "學生註冊成功！\n" +
          "學生資料\n學生 ID :" +
          data.id +
          "\n學生姓名：" +
          data.studentname
      );
      window.location.href = "./index.html";
      console.log(data);
    })
    .catch(function (error) {
      console.log("錯誤訊息:" + error);
    });
});
