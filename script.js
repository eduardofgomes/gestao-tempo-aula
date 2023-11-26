const button = document.querySelector("#translate")

button.addEventListener("click", function(e) {
    e.preventDefault()

    if(button.classList.contains("english")) {
        location.reload();
    } else {
        button.classList.add("english")
        document.querySelector("#title1").textContent = "Software that manages time and increases classroom productivity."
        document.querySelector("#text-introdution").textContent = "Our product offers innovative features such as class closure alerts based on the teacher's schedule, timetable customization via SIGA and the flexibility to adjust the duration of classes. Goodbye to worries about delays and slacking off, simplify academic administration now! With GTA you'll increase your productivity and focus on what really matters."
        document.querySelector("#title2").textContent = "Simple and quick to use"
        document.querySelector("#text-introdution2").textContent = "Our product integrates with SIGA data, automating the linking of teacher data between SIGA and GTA. It has a simple design, well-described functionalities and offers a comfortable experience for all users. It also includes functions that help with the administration of idle rooms and laboratories in the institution."
        document.querySelector("#designed-by").textContent = "Designed by"
        document.querySelector(".about").textContent = "Discover more"
    }
})
