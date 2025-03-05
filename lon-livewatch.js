/*! For license information please see app.js.LICENSE.txt */
// lon-livewatch.js

document.addEventListener('DOMContentLoaded', function() {
    const livewatchContainer = document.createElement('div');
    livewatchContainer.classList.add('livewatch-container');

    const livewatchContent = document.createElement('div');
    livewatchContent.classList.add('livewatch-content');

    const header = document.createElement('div');
    header.classList.add('livewatch-header');
    header.textContent = "Live Watch";

    const text = document.createElement('div');
    text.classList.add('livewatch-text');
    text.textContent = "This is the live watch section. Here you will see real-time updates.";

    const button = document.createElement('button');
    button.classList.add('livewatch-button');
    button.textContent = "Click Me!";
    button.addEventListener('click', function() {
        alert("Button clicked!");
    });

    livewatchContent.appendChild(header);
    livewatchContent.appendChild(text);
    livewatchContent.appendChild(button);
    livewatchContainer.appendChild(livewatchContent);

    document.body.appendChild(livewatchContainer);
});
