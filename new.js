document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log(box)
            const disappearedElement = box.querySelector(".disappered");
            if (disappearedElement) {
                if (disappearedElement.style.display === "flex") {
                    disappearedElement.style.display = "none";
                } else {        
                    disappearedElement.style.display = "flex";
                }
            }
        });
    });
});