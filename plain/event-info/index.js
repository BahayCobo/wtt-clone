function matchButton(event, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("bg-blue-400");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("bg-blue-400");
}


