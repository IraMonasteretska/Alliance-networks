export function blogSelect() {
  const filterOption = document.querySelector("#sort-category-blog-father");
  const selectedOptions = document.querySelector("#sonBlockCategory");

  // filterOption.addEventListener("click", function(event) {
  //   let target = event.target;

  //   if (target.style.color === "blue" || target == filterOption) {
  //     return;
  //   }

  //   let sortTag = document.createElement("p");
  //   let sortTagClose = document.createElement("span");

  //   target.style.color = "blue";
  //   sortTag.innerHTML = target.innerHTML;

  //   selectedOptions.appendChild(sortTag);
  //   sortTag.classList.add("sort__tags");
  //   sortTag.appendChild(sortTagClose);
  //   sortTagClose.classList.add("sort__tags-close");
  // });

  const filterOptions = filterOption.querySelectorAll(".js-item");
  filterOptions.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        return;
      }

      item.classList.add("active");

      let sortTag = document.createElement("p");
      let sortTagClose = document.createElement("span");
      
      sortTag.classList.add("sort__tags");
      sortTagClose.classList.add("sort__tags-close");

      //add clase
      item.style.color = "blue";
      sortTag.textContent = item.textContent;

      sortTag.appendChild(sortTagClose);
      selectedOptions.appendChild(sortTag);
    });
  });

  selectedOptions.addEventListener("click", function(event) {
    let target = event.target;
    
    if (target == selectedOptions || target.classList.contains("sort__tags")) {
      return;
    }
          const elements = document.querySelector(
            ".sort__tags-block-category-container"
          );

    target.parentNode.parentNode.removeChild(target.parentNode);

    for (let i = 0; i < elements.childNodes.length; i++) {
      if (
        elements.childNodes[i].innerHTML ==
        target.parentNode.innerHTML.replace(/<\/?[^>]+(>|$)/g, "")
      ) {
        elements.childNodes[i].style.color = "black";
      }
    }
  });
}
