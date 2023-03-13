function displayBlogPost() {
    const blogTitle = document.querySelector("#blog-title");
    const blogImage = document.querySelector("#blog-image");
    const blogContent = document.querySelector("#blog-content");


    let urlParamsId = new URLSearchParams(window.location.search);
    let blogId = urlParamsId.get('id');
console.log(blogId);

    fetch(`https://mybrand-faustin.cyclic.app/api/v1/blogs/${blogId}`)
        .then(resp => resp.json())
        .then(blog => {
                blogTitle.innerHTML = blog.data.title;
                blogImage.innerHTML = `<img src="${blog.data.image}" alt="${blog.title}">`;
                blogContent.innerHTML = blog.data.content;
        })
        .catch(error => {
                console.error(error);
        });
}

