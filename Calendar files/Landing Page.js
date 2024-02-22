//site wide cursor
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

document.addEventListener('mouseenter', () => {
    site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
    const w = site_wide_cursor.clientWidth;
    const h = site_wide_cursor.clientWidth;

    site_wide_cursor.style.transform = `translate(${evt.clientX - w/2}px, ${evt.clientY -h/2}px)`;
};

// POST-IT NOTE VANISH
const image = document.getElementById('photo_clip2');
let isMouseOver = false;
let currentOpacity = 1; // Set initial opacity to fully visible

image.addEventListener('mouseover', function() {
  isMouseOver = true;
  decreaseOpacity();
});

image.addEventListener('mouseout', function() {
  isMouseOver = false;
  increaseOpacity(); // When mouse leaves, start increasing opacity
});

function decreaseOpacity() {
  if (!isMouseOver || currentOpacity <= 0) {
    return; // Stop decreasing if mouse is not over the image or opacity is already 0
  }
  
  currentOpacity -= 0.05; // Decrease opacity gradually
  currentOpacity = Math.max(currentOpacity, 0); // Ensure opacity doesn't go below 0
  image.style.opacity = currentOpacity;
  
  requestAnimationFrame(decreaseOpacity);
}

function increaseOpacity() {
  if (isMouseOver || currentOpacity >= 1) {
    return; // Stop increasing if mouse is over the image or opacity is already 1
  }
  
  currentOpacity += 0.05; // Increase opacity gradually
  currentOpacity = Math.min(currentOpacity, 1); // Ensure opacity doesn't exceed 1
  image.style.opacity = currentOpacity;
  
  requestAnimationFrame(increaseOpacity);
}
