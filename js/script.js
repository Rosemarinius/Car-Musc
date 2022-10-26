const serviceBtns = document.querySelectorAll('.service__button');
const serviceSection = document.querySelectorAll('.service-items-block');

for (let i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        if (serviceBtns[0].classList.contains("active")) {
            serviceSection[0].classList.remove("none");
            serviceSection[1].classList.add("none");
        } else if (serviceBtns[1].classList.contains("active")) {
            serviceSection[1].classList.remove("none");
            serviceSection[0].classList.add("none");
        }
    });
}