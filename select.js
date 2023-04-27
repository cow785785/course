//選課系統

//抓取輸入框input節點
const selectstudentid = document.querySelector("#selectstudentid");
const selectclassid = document.querySelector("#selectclassid");
const selectclassname = document.querySelector("#selectclassname");

//選擇課程
const addbtn = document.querySelector("#addbtn");

addbtn.addEventListener("click", function () {
  let body = {
    studentid: `${selectstudentid.value}`,
    classid: `${selectclassid.value}`,
    classname: `${selectclassname.value}`,
  };
  fetch("http://localhost:8080/selectclass", {
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
      if (
        !selectstudentid.value ||
        !selectclassid.value ||
        !selectclassname.value
      ) {
        alert("請輸入完整資訊");
        return;
      }
      alert(
        "\n學生ID : " +
          data.studentid +
          "\n課程ID : " +
          data.classid +
          "\n課程名稱 : " +
          data.classname +
          "\n訊息 : " +
          data.message
      );
      window.location.href = "./selectclass.html";
    })
    .catch(function (error) {
      console.log("錯誤訊息 : ", error);
    });
});

//刪除課程
const deletebtn = document.querySelector("#deletebtn");
deletebtn.addEventListener("click", function () {
  let body = {
    studentid: `${selectstudentid.value}`,
    classid: `${selectclassid.value}`,
    classname: `${selectclassname.value}`,
  };
  fetch("http://localhost:8080/deleteselectclass", {
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
        "刪除選課成功 !\n " +
          "\n學生ID : " +
          data.studentid +
          "\n課程ID : " +
          data.classid +
          "\n課程名稱 : " +
          data.classname
      );
      window.location.href = "./selectclass.html";
    })
    .catch(function (error) {
      console.log("錯誤訊息 : ", error);
    });
});

//查詢學生選課資料
const searchbtn = document.querySelector("#searchbtn");
searchbtn.addEventListener("click", function () {
  let body;
  fetch("http://localhost:8080/getAllSelectcourse", {
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
      let abc = "";
      data.forEach((element) => {
        abc +=
          element.studentid +
          " " +
          element.classid +
          " " +
          element.classname +
          "\n";
      });
      alert(abc);
      //   window.location.href = "./selectclass.html";
    })
    .catch(function (error) {
      console.log("錯誤訊息 : ", error);
    });
});
