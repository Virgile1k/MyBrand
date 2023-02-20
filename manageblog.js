// Retrieve data from local storage
const blogTitle = localStorage.getItem('title');
const blogImage = localStorage.getItem('image');
const bbody = localStorage.getItem('body')
// Get the target element
const contentEditDiv = document.querySelector('.content-edit');

// Create HTML elements
const blogEditPanelDiv = document.createElement('div');
blogEditPanelDiv.classList.add('blogeditdown-panel');
const blogEditImage = document.createElement('img');
blogEditImage.src = blogImage;
blogEditImage.alt = '';
blogEditImage.classList.add('blog-edit-image');
const blogEditParagraph = document.createElement('p');
blogEditParagraph.textContent = blogTitle;
blogEditParagraph.id = 'blogedit-prgrph';
const spanElement = document.createElement('span');
const deleteIcon = document.createElement('img');
deleteIcon.src = 'https://img.icons8.com/fluency-systems-regular/48/000000/delete-forever.png';
deleteIcon.classList.add('iconise-delete');
const editIconWrapper = document.createElement('a');
editIconWrapper.href = 'editorialspace.html';
const editIcon = document.createElement('img');
editIcon.src = 'https://img.icons8.com/ios/50/null/pencil--v1.png';
editIcon.classList.add('iconise-edit');

// Append HTML elements to the target element
spanElement.appendChild(deleteIcon);
editIconWrapper.appendChild(editIcon);
spanElement.appendChild(editIconWrapper);
blogEditPanelDiv.appendChild(blogEditImage);
blogEditPanelDiv.appendChild(blogEditParagraph);
blogEditPanelDiv.appendChild(spanElement);
contentEditDiv.appendChild(blogEditPanelDiv);
