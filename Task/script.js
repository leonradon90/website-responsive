var faqQuestions = document.querySelectorAll(".faq-question");

for (var i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener("click", function() {
    var activeQuestion = document.querySelector(".faq-question.active");
    if (activeQuestion && activeQuestion !== this) {
      activeQuestion.classList.remove("active");
      activeQuestion.querySelector(".arrow-down").classList.remove("arrow-up");
      activeQuestion.nextElementSibling.style.display = "none";
    }

    this.classList.toggle("active");
    this.querySelector(".arrow-down").classList.toggle("arrow-up");
    this.nextElementSibling.style.display = this.classList.contains("active") ? "block" : "none";
  });

  faqQuestions[i].addEventListener("keydown", function(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.click();
    }
  });
}

var firstQuestion = document.querySelector(".faq-question");
if (firstQuestion) {
  firstQuestion.classList.add("active");
  firstQuestion.querySelector(".arrow-down").classList.add("arrow-up");
  firstQuestion.nextElementSibling.style.display = "block";
}
