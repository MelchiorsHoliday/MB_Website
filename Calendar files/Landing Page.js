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

// Select the image element
const glidingImage = document.getElementById('photo_clip');

// Add event listener for mouseenter
glidingImage.addEventListener('mouseover', function() {
  // Modify z-index, size, and position when mouse enters
  glidingImage.style.zIndex = '10'; // Change z-index
  glidingImage.style.transform = 'scale(1.2)'; // Increase size
  glidingImage.style.position = 'relative'; // Change position if needed
});

// Add event listener for mouseleave
glidingImage.addEventListener('mouseleave', function() {
  // Revert changes when mouse leaves
  glidingImage.style.zIndex = '1'; // Revert z-index
  glidingImage.style.transform = 'scale(1)'; // Revert size
  glidingImage.style.position = 'initial'; // Revert position if needed
});