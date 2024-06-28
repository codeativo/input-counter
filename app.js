const input = document.querySelector(".input-text");
const count = document.querySelector(".count");
const maxLength = input.getAttribute("maxlength");

input.addEventListener("keyup", ()=>{
    const value = count.innerText = maxLength - input.value.length;

    if (value === 0) {
        input.classList.add("input-error");
        count.classList.add("count-error");
    }else{
        input.classList.remove("input-error");
        count.classList.remove("count-error");
    }
});