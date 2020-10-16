import $ from "jquery";
import '../bootstrap/js/bootstrap.min.js';



import createAnimation from './animation';
createAnimation();

// require('../js/animation.js');
require('../js/pages.js');


$(document).ready(function() {
    $('.sort__by-category-position').click(function(event){
    $('.sort__category-ul-position, .sort__by-category-position, .button-test-position').toggleClass('active');   
    
    let levelBtn = document.querySelector('.button-test-level');
    let levelUlCat = document.querySelector('.sort__category-ul-level');
    let LevelCat = document.querySelector('.sort__by-category-level');
    if(levelUlCat.classList.contains('active')){
      levelUlCat.classList.toggle("active");
      LevelCat.classList.toggle("active");
      levelBtn.classList.toggle("active");
    }
    let TagBtn = document.querySelector('.button-test-tag');
    let TagUlCat = document.querySelector('.sort__category-ul-tag');
    let TagCat = document.querySelector('.sort__by-category-tag');
    if(TagUlCat.classList.contains('active')){
      TagUlCat.classList.toggle("active");
      TagCat.classList.toggle("active");
      TagBtn.classList.toggle("active");
    }
    });  
    });
    
    $(document).ready(function() {
      $('.sort__by-category-level').click(function(event){
      $('.sort__category-ul-level, .sort__by-category-level, .button-test-level').toggleClass('active');   
      let positionBtn = document.querySelector('.button-test-position');
      let positionUlCat = document.querySelector('.sort__category-ul-position');
      let positionCat = document.querySelector('.sort__by-category-position');
      if(positionCat.classList.contains('active')){
        positionUlCat.classList.toggle("active");
        positionCat.classList.toggle("active");
        positionBtn.classList.toggle("active");
      }
      let TagBtn = document.querySelector('.button-test-tag');
      let TagUlCat = document.querySelector('.sort__category-ul-tag');
      let TagCat = document.querySelector('.sort__by-category-tag');
      if(TagUlCat.classList.contains('active')){
        TagUlCat.classList.toggle("active");
        TagCat.classList.toggle("active");
        TagBtn.classList.toggle("active");
      }
      });  
      });
  
      $(document).ready(function() {
        $('.sort__by-category-tag').click(function(event){
        $('.sort__category-ul-tag, .sort__by-category-tag, .button-test-tag').toggleClass('active');   
        let positionBtn = document.querySelector('.button-test-position');
        let positionUlCat = document.querySelector('.sort__category-ul-position');
        let positionCat = document.querySelector('.sort__by-category-position');
        if(positionCat.classList.contains('active')){
          positionUlCat.classList.toggle("active");
          positionCat.classList.toggle("active");
          positionBtn.classList.toggle("active");
        }
        let levelBtn = document.querySelector('.button-test-level');
        let levelUlCat = document.querySelector('.sort__category-ul-level');
        let LevelCat = document.querySelector('.sort__by-category-level');
        if(levelUlCat.classList.contains('active')){
          levelUlCat.classList.toggle("active");
          LevelCat.classList.toggle("active");
          levelBtn.classList.toggle("active");
        }
        });  
        });
  
        let test = document.querySelector('.sort__category-ul-level');
        console.log(test)
  
  
  
    // visible tags block
  $(document).ready(function() {
    $('.sort__by-teg-req').click(function(event){
    $('.sort__tags-block, .sort__by-teg-req').toggleClass('active');   
    });  
    });
  
  
    $(document).ready(function() {
      $('.select-dropdown').click(function(event){
      $(' .zmdi-chevron-down').toggleClass('active');   
      });  
      });
  
  
  
  
    // clear search form in page tags
    const clearSearch = document.getElementById('clearSearch');
    let searchInput = document.getElementById('searchInput');

    if (searchInput) {
        // console.log(searchInput.value)
          clearSearch.addEventListener('click', getClearSearch)
          function getClearSearch(){
            searchInput.value = '';
          }
    }
  
  
  // vacancies form accordion
  
  document.addEventListener('DOMContentLoaded', createSelect, false);
  function createSelect() {
      var select = document.getElementsByTagName('select'),
        liElement,
        ulElement,
        optionValue,
        iElement,
        optionText,
        selectDropdown,
        elementParentSpan;
  
        for (var select_i = 0, len = select.length; select_i < len; select_i++) {
          //console.log('selects init');
  
        select[select_i].style.display = 'none';
        wrapElement(document.getElementById(select[select_i].id), document.createElement('div'), select_i, select[select_i].getAttribute('placeholder-text'));
  
        for (var i = 0; i < select[select_i].options.length; i++) {
          liElement = document.createElement("li");
          optionValue = select[select_i].options[i].value;
          optionText = document.createTextNode(select[select_i].options[i].text);
          liElement.className = 'select-dropdown__list-item';
          liElement.setAttribute('data-value', optionValue);
          liElement.appendChild(optionText);
          ulElement.appendChild(liElement);
  
          liElement.addEventListener('click', function () {
            displyUl(this);
          }, false);
        }
      }
      function wrapElement(el, wrapper, i, placeholder) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
  
        document.addEventListener('click', function (e) {
          let clickInside = wrapper.contains(e.target);
          if (!clickInside) {
            let menu = wrapper.getElementsByClassName('select-dropdown__list');
            menu[0].classList.remove('active');
          }
        });
  
        var buttonElement = document.createElement("button"),
          spanElement = document.createElement("span"),
          spanText = document.createTextNode(placeholder);
          iElement = document.createElement("i");
          ulElement = document.createElement("ul");
  
        wrapper.className = 'select-dropdown select-dropdown--' + i;
        buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
        buttonElement.setAttribute('data-value', '');
        buttonElement.setAttribute('type', 'button');
        spanElement.className = 'select-dropdown select-dropdown--' + i;
        iElement.className = 'zmdi zmdi-chevron-down';
        ulElement.className = 'select-dropdown__list select-dropdown__list--' + i;
        ulElement.id = 'select-dropdown__list-' + i;
  
        wrapper.appendChild(buttonElement);
        spanElement.appendChild(spanText);
        buttonElement.appendChild(spanElement);
        buttonElement.appendChild(iElement);
        wrapper.appendChild(ulElement);
      }
  
      function displyUl(element) {
  
        if (element.tagName == 'BUTTON') {
          selectDropdown = element.parentNode.getElementsByTagName('ul');
          //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
          for (var i = 0, len = selectDropdown.length; i < len; i++) {
            selectDropdown[i].classList.toggle("active");
            //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
            //parentNode[0].classList.toggle("active");
          }
        } else if (element.tagName == 'LI') {
          var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
          selectElement(selectId.id, element.getAttribute('data-value'));
          elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
          element.parentNode.classList.toggle("active");
          elementParentSpan[0].textContent = element.textContent;
          elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
        }
  
      }
      function selectElement(id, valueToSelect) {
        var element = document.getElementById(id);
        element.value = valueToSelect;
        element.setAttribute('selected', 'selected');
      }
      var buttonSelect = document.getElementsByClassName('select-dropdown__button');
      for (var i = 0, len = buttonSelect.length; i < len; i++) {
        buttonSelect[i].addEventListener('click', function (e) {
                  e.preventDefault();
                  displyUl(this);
              }, false);
          }
  }
  
  



  const fatherBlog = document.getElementById('sort-category-blog-father');
  let sonBlockCategory = document.getElementById('sonBlockCategory');
  fatherBlog.addEventListener('click', function(event) {
  
      let target = event.target;
  
      if(target.style.color == 'blue' || target == fatherBlog){
        return
      }
      let sortTag = document.createElement("p");   
      let sortTagClose = document.createElement("span");  
      target.style.color = 'blue'
  sortTag.innerHTML = target.innerHTML;   
  
  sonBlockCategory.appendChild(sortTag);  
  sortTag.classList.add('sort__tags');
  sortTag.appendChild(sortTagClose);  
  sortTagClose.classList.add('sort__tags-close');
  });
  
 
 

  sonBlockCategory.addEventListener('click', function(event) {
      let target = event.target;
      if( target == sonBlockCategory || target.classList.contains('sort__tags')){
        return
      }
  target.parentNode.parentNode.removeChild(target.parentNode);
  var elements = document.querySelector('.sort__tags-block-category-container');
for (let i = 0; i < elements.childNodes.length; i++) {
    if (elements.childNodes[i].innerHTML == target.parentNode.innerHTML.replace(/<\/?[^>]+(>|$)/g, "")) {
       elements.childNodes[i].style.color = 'black'
    }        
}
  
  });