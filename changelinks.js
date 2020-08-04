const x = document.getElementsByTagName("a")
for (element of x) {
    const link = element.getAttribute("href");
    const className = element.getAttribute("class");
    if (link.endsWith("/network/members") && className !== "js-selected-navigation-item menu-item") {
        console.log(element);
        const newLink = link.replace("/network/members", "/network");
        element.setAttribute("href", newLink);
    }
}
