
let count = 0;
const countValue = document.querySelector("#value")
const Btns = document.querySelectorAll(".btn")

Btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")) {
            count++;
        }
        else if(styles.contains("decrease")) {
            count--;
        }
        else {
            count = 0
        }
        if(count > 0) {
            countValue.style.color = "green"
        }
        else if(count < 0) {
            countValue.style.color = "red"
        }else {
            countValue.style.color = "#222"
        }
        countValue.textContent = count
    })
})

