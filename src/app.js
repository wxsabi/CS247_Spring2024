// Place your DOM creation code here

// is index.old.html the page you wanted us to recreate? if so, here:

document.addEventListener('DOMContentLoaded', (event) => {
    // This is for the main element
    const main = document.createElement('main');
    document.body.appendChild(main);

    // This is for the section element
    const section = document.createElement('section');
    main.appendChild(section);

    // For H1
    const h1 = document.createElement('h1');
    h1.textContent = 'Homework 01';
    section.appendChild(h1);

    // For the paragraphs
    const p1 = document.createElement('p');
    p1.textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.';
    section.appendChild(p1);

    // For the life of me, I couldn't find a way to make the '<p>' bold. How would I do that?
    const p2 = document.createElement('p');
    p2.textContent = 'To make it fun, and maybe a bit tricky, I\'ve added several types of elements. Some elements are pretty simple like these <p> tags. Others are more going to require extra attributes or mixing text nodes with element nodes.';
    section.appendChild(p2);

    // aside
    const aside = document.createElement('aside');
    document.body.appendChild(aside);

    // Mario's image... IT'S-A MEE, MARIO!!!
    const img = document.createElement('img');
    img.src = 'assets/mario.png';
    aside.appendChild(img);

    // for the stuff Mario's saying
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = 'Mario says "Wahoo!" to homework';
    aside.appendChild(blockquote);

    // to play the mp3 file
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.autoplay = false; // This pretty much does the playing for you, but it's pretty cool
    audio.src = 'assets/Super Mario Bros. medley.mp3';
    aside.appendChild(audio);
});

// if that is not what you wanted me to recreate then please let me know.

// Sources used to find examples and how to do this homework:
// https://www.geeksforgeeks.org/how-to-replace-an-html-element-with-another-one-using-javascript/#google_vignette
// https://stackoverflow.com/questions/58335774/how-to-replace-entire-html-content-with-javascript
// https://www.geeksforgeeks.org/how-to-replace-the-entire-html-node-using-javascript/
// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith