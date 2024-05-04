
function submitForm() {
    // Get data
    const title = document.getElementById('title').value.trim();
    const desc = document.getElementById('description').value.trim();
    const image = document.getElementById('image').files[0];

    // Check if anything isn't filled out
    if (!title || !desc || !image) {
        alert('Please fill in all forms, (title, image, description)');
        return;
    }

    // Variable stuff

    //****************************************************

    //Divider to spread things out
    const section = document.createElement('div');
    section.className = 'entry';


    //Title text
    const newTitle = document.createElement('h2');
    newTitle.textContent = title;


    //The image
    const newImg = document.createElement('img');
    newImg.className = 'images';
    newImg.alt = title;
    newImg.src = URL.createObjectURL(image);


    //And finally the description
    const newDesc = document.createElement('h4');
    newDesc.textContent = desc;

    //****************************************************

    // Append new elements to the album section

    section.appendChild(newTitle);
    // Title

    section.appendChild(newImg);
    // Image

    section.appendChild(newDesc);
    // Description

    //****************************************************

    // Append the new section to the album container
    const albumContainer = document.querySelector('.albumcontainer');
    albumContainer.appendChild(section);

    // Clear form after submission
    document.getElementById('albumForm').reset();
}