document.addEventListener("DOMContentLoaded", () => {

  const ancors = () => {
    const links = document.querySelectorAll('.js-ancor-link');
  
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const elemData = link.getAttribute('href');
        const elem = document.querySelector(`${elemData}`);
        const elemCoords = getCoords(elem);
        const finalCoords = elemCoords.top - 100;
  
        $("html, body").animate({ scrollTop: finalCoords });
      });
    });
  };

  const phoneMask = () => {
    $('.js-phone-mask').mask('+7 (000) 000-00-00');
  };
  
  function popup () {
    let popup = document.querySelectorAll('.js-popup');
  
    popup.forEach(item => {
      item.addEventListener('click', event => {
        if (event.target.closest('.js-close') || !event.target.closest('.popup__wrapper')) {
          item.classList.remove('active');
          NKH.body.classList.remove('fixed');
        }
      });
    });
  }

  const NKH = {};
NKH.body = document.querySelector('body');
NKH.ESC_CODE = 27;
NKH.siteContent = document.querySelector('.site-content');
NKH.footer = document.querySelector('.page-footer');
NKH.isIe11 = !!window.MSInputMethodContext && !!document.documentMode;


if(NKH.isIe11){
  NKH.body.classList.add('ie11');
}

var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }

  return siblings;

};

function top_walker (node, test_func, last_parent) {
	while ( node && node !== last_parent ) {
		if ( test_func(node) ) {
			return node;
		}
		node = node.parentNode;
	}
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const onPageRdy = () => {
  // utility
  phoneMask();
  popup();

  // specific
  ancors();

  // sliders
};

onPageRdy();

});
