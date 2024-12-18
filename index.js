document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach((boxCover) => {
      boxCover.classList.remove('expanded')

    })



    boxes.forEach((boxCover) => {
      // Create the options div but do not append initially


      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add('options');
      optionsDiv.innerHTML = `
        <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Size </td>
                                <td>Color</td>
                            </tr>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <select>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="red">Red</option>
                                        <option value="green" selected>Green</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td>
                                    <select>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="red">Red</option>
                                        <option value="green" selected>Green</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
      `;
  
      // Add click event listener to the boxCover
      boxCover.addEventListener('click', (e) => {
        // Ensure the click is not on an input or already expanded
        if (e.target.tagName.toLowerCase() === 'input' || boxCover.contains(optionsDiv)) {
          return;
        }
  
        // Append the optionsDiv dynamically
        boxCover.appendChild(optionsDiv);
        boxCover.classList.toggle('expanded');
      });
  
      // Handle option clicks
      optionsDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent collapsing the box on option click
        const target = e.target;
  
        if (target.classList.contains('option')) {
          const color = target.dataset.color;
          const size = target.dataset.size;
  
          if (color) {
            boxCover.style.border = "2px solid " + color;
          }
  
          if (size) {
            switch (size) {
              case 'small':
                boxCover.style.width = '150px';
                break;
              case 'medium':
                boxCover.style.width = '200px';
                break;
              case 'large':
                boxCover.style.width = '250px';
                break;
            }
          }
        }
      });
    });
  });
  