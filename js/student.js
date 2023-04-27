//抓取輸入框節點，取得值
const addupdateid = document.querySelector("#addupdateid");
const addupdatename = document.querySelector("#addupdatename");

//新增學生資料
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", function () {
  let body = {
    id: `${addupdateid.value}`,
    studentname: `${addupdatename.value}`,
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
          data.studentname +
          "\n訊息 : " +
          data.message
      );
      window.location.href = "./updele.html";
      console.log(data);
    })
    .catch(function (error) {
      console.log("錯誤訊息:" + error);
    });
});

//更新學生資料

const updatebtn = document.querySelector("#updatebtn");
updatebtn.addEventListener("click", function () {
  let body = {
    id: `${addupdateid.value}`,
    studentname: `${addupdatename.value}`,
  };
  fetch("http://localhost:8080/updateStudent", {
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
        "學生資料更新成功！\n" +
          "學生資料\n學生 ID :" +
          data.id +
          "\n學生姓名：" +
          data.studentname +
          "\n訊息 : " +
          data.message
      );
      window.location.href = "./updele.html";
      console.log(data);
    })
    .catch(function (error) {
      console.log("錯誤訊息:" + error);
    });
});

//刪除學生資料
const deletebtn = document.querySelector("#deletebtn");
deletebtn.addEventListener("click", function () {
  let body = {
    id: `${addupdateid.value}`,
    studentname: `${addupdatename.value}`,
  };
  fetch("http://localhost:8080/deleteStudent", {
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
        "學生資料刪除成功！\n" +
          "學生資料\n學生 ID :" +
          data.id +
          "\n學生姓名：" +
          data.studentname +
          "\n訊息 : " +
          data.message
      );
      window.location.href = "./updele.html";
    })
    .catch(function (error) {
      console.log("錯誤訊息:" + error);
    });
});
