$(document).ready(function () {
    $('nav ul li a').on('click', function () {
        alert(`You are navigating to ${$(this).text()}`);
    });
});
