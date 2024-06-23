var el = document.querySelectorAll("#carousel");

function scrollDiv0(a, b) {

el[0].scrollBy({
   top: b,
   left: a,
   behaviour: 'smooth'
})
};

function scrollDiv1(a, b) {

el[1].scrollBy({
   top: b,
   left: a,
   behaviour: 'smooth'
})
};

function scrollDiv2(a,b) {

el[2].scrollBy({
   top: b,
   left: a,
   behaviour: 'smooth'
})
};





function createPaginationMarkers(a) {
  const images = a.querySelectorAll('img');
  const pagination = a.querySelector('#pagination');
  images.forEach((img) => {
    const imgViewName = `--${img.id}`;
    img.style.viewTimelineName = imgViewName;
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.role = 'tab';
    marker.style.animationTimeline = imgViewName;
    marker.addEventListener('click', () => img.scrollIntoView());
    pagination.appendChild(marker);
  });

  document.body.style.timelineScope = `${Array.from(images).map(
    (image) => image.style.viewTimelineName
  )}`;

}

el.forEach((elem) => {
    console.log(elem);

// Check browser support for Scroll-driven Animations
if (CSS.supports('view-timeline-axis', 'inline')) {
  createPaginationMarkers(elem);
};

// Start scrolling from the second image
  const images1 = elem.querySelectorAll('img');
  images1[1].scrollIntoView();
  });
