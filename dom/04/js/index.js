window.onload = () => {
    const root = document.querySelector("#root");
    render(root);
}

function render(targetElement) {
    targetElement.innerHTML = app();
}