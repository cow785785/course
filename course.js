//抓取所有input的節點
const classarea = document.querySelectorAll('input[type="text"]');
//新增課程按鈕節點
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", function () {
  let body = {};

  // 迴圈獲取每個 input 元素節點的值
  for (let i = 0; i < classarea.length; i++) {
    const input = classarea[i];

    body[input.id] = input.value;
  }
  fetch("http://localhost:8080/addClass", {
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
        "課程新增成功！\n" +
          "課程資料\n學生 ID :" +
          data.classid +
          "\n課程名稱：" +
          data.classname +
          "\n上課星期 :" +
          data.dayOfWeek +
          "\n上課開始時間 :" +
          data.startTime +
          "\n上課結束時間 :" +
          data.endTime +
          "\n課程學分 :" +
          data.credit
      );
      window.location.href = "./course.html";
      classarea.value = "";
    })
    .catch(function (error) {
      console.log("新增課程失敗錯誤訊息" + error);
    });
});
