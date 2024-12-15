const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  // Create options for each box
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.innerHTML = `
    <div class="option" data-color="#FF5733">Color: Red</div>
    <div class="option" data-color="#33FF57">Color: Green</div>
    <div class="option" data-color="#3357FF">Color: Blue</div>
    <div class="option" data-size="small">Size: Small</div>
    <div class="option" data-size="medium">Size: Medium</div>
    <div class="option" data-size="large">Size: Large</div>
  `;
  box.appendChild(optionsDiv);

  // Expand/collapse box on click
  box.addEventListener('click', (e) => {
    // Prevent radio button clicks from propagating
    if (e.target.tagName.toLowerCase() === 'input') {
      return;
    }
    box.classList.toggle('expanded');
  });

  // Handle option clicks
  optionsDiv.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('option')) {
      const color = target.dataset.color;
      const size = target.dataset.size;

      if (color) {
        box.style.backgroundColor = color;
      }

      if (size) {
        switch (size) {
          case 'small':
            box.style.width = '150px';
            break;
          case 'medium':
            box.style.width = '200px';
            break;
          case 'large':
            box.style.width = '250px';
            break;
        }
      }
    }
  });
});