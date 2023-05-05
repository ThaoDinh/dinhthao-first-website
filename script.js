"use strict";

// Xác thực email
document
  .querySelector(".personal-input button")
  .addEventListener("click", function () {
    const emailInput = document.querySelector(".personal-input input").value;

    if (!emailInput) {
      alert("Chưa nhập email");
      return;
    }

    const matchEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!matchEmail.test(emailInput)) {
      alert("Email không hợp lệ");
      return;
    }

    document.querySelector(".personal-input").classList.add("hidden");
    document.querySelector(".personal-detail").classList.remove("hidden");
  });

// Ẩn thông tin nghề nghiệp
document.querySelectorAll(".job-content").forEach((contentElem) => {
  contentElem.classList.add("hidden");
});

document.querySelectorAll(".job-card").forEach((cardElem) => {
  const headElem = cardElem.querySelector(".job-head");
  const viewBtn = headElem.querySelector(".job-btn");
  const contentElem = cardElem.querySelector(".job-content");
  viewBtn.classList.add("hidden");

  cardElem.addEventListener("mouseover", function () {
    viewBtn.classList.toggle("hidden");
  });
  cardElem.addEventListener("mouseout", function () {
    viewBtn.classList.toggle("hidden");
  });
  viewBtn.addEventListener("click", function () {
    contentElem.classList.toggle("hidden");
    if (contentElem.classList.contains("hidden")) {
      console.log(1);
      viewBtn.innerHTML = "▼ view more";
    } else {
      viewBtn.innerHTML = "▲ view less";
    }
  });
});
