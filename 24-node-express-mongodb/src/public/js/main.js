const navLinks = document.querySelectorAll('nav a');
const navTextCopy = document.getElementById('nav_big_text');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseover', function () {
    let navLinkText = this.textContent;
    navTextCopy.textContent = navLinkText;
    navTextCopy.classList.add('big_text_active');
  });

  navLinks[i].addEventListener('mouseout', function () {
    let navLinkText = this.textContent;
    navTextCopy.textContent = navLinkText;
    navTextCopy.classList.remove('big_text_active');
  });
}

function copyrightYear() {
  const yearEl = document.querySelector('.year');
  const date = new Date();
  yearEl.textContent = date.getFullYear();
}

copyrightYear();

// FORM
$(window, document, undefined).ready(function () {
  $('input').blur(function () {
    var $this = $(this);
    if ($this.val()) $this.addClass('used');
    else $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function (e) {
    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px',
    });

    $this.addClass('is-active');
  });

  $ripples.on(
    'animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd',
    function (e) {
      $(this).removeClass('is-active');
    }
  );
});
