//抓取所有input的節點
const classareaid = document.querySelector("#classareaid");
const classareaname = document.querySelector("#classareaname");
const classareaday = document.querySelector("#classareaday");
const classareastart = document.querySelector("#classareastart");
const classareaend = document.querySelector("#classareaend");
const classareacredit = document.querySelector("#classareacredit");
const classarea = document.querySelectorAll('input[type="class-add-area"]');

//新增課程按鈕節點
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", function () {
  let body = {
    classid: `${classareaid.value}`,

    classname: `${classareaname.value}`,

    dayOfWeek: `${classareaday.value}`,

    startTime: `${classareastart.value}`,

    endTime: `${classareaend.value}`,

    credit: `${classareacredit.value}`,
  };
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
      console.log(data);
      alert(
        "課程新增成功！\n" +
          "課程資料\n課程 ID :" +
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

//修改課程
const updatebtn = document.querySelector("#updatebtn");
updatebtn.addEventListener("click", function () {
  let body = {
    classid: `${classareaid.value}`,

    classname: `${classareaname.value}`,

    dayOfWeek: `${classareaday.value}`,

    startTime: `${classareastart.value}`,

    endTime: `${classareaend.value}`,

    credit: `${classareacredit.value}`,
  };
  fetch("http://localhost:8080/updateClass", {
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
      console.log(data);
      alert(
        "課程修改成功！\n" +
          "課程資料\n課程 ID :" +
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
      console.log("刪除課程失敗錯誤訊息" + error);
    });
});

//刪除按鈕課程
const deletebtn = document.querySelector("#deletebtn");
deletebtn.addEventListener("click", function () {
  let body = {
    classid: `${classareaid.value}`,

    classname: `${classareaname.value}`,

    dayOfWeek: `${classareaday.value}`,

    startTime: `${classareastart.value}`,

    endTime: `${classareaend.value}`,

    credit: `${classareacredit.value}`,
  };
  fetch("http://localhost:8080/deleteClass", {
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
      console.log(data);
      alert(
        "課程刪除成功！\n" +
          "課程資料\n課程 ID :" +
          data.classid +
          "\n課程名稱：" +
          data.classname
      );
      window.location.href = "./course.html";
      classarea.value = "";
    })
    .catch(function (error) {
      console.log("刪除課程失敗錯誤訊息" + error);
    });
});
