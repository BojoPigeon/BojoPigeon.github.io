document.addEventListener ('DOMContentLoaded', (event) => {
  // Get a reference to the style selector and the link tag
  const styleSelector = document.getElementById ('style-selector');
  const styleLink = document.getElementById ('style-link');

  // Add an event listener to the selector for when its value changes
  styleSelector.addEventListener ('change', (e) => {
    // Get the selected CSS file path from the option's value
    const selectedStyle = e.target.value;

    // Update the href attribute of the style link tag
    styleLink.href = selectedStyle;
  });
});