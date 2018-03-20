let createLogoFile = function(logo) {

  // runs codesuite
  // **function declarations below**
  createCommandElement(htmlStrings('artboard'), createFilenames(logo));

  // creates array of filenames for defined logo
  function createFilenames(logoname) {
    return [
      logoname + "_fulllogo_primbg.svg",
      logoname + "_fulllogo_accentbg.svg",
      logoname + "_logomark_square_primbg.svg",
      logoname + "_logomark_rounded_primbg.svg",
      logoname + "_logomark_circle_primbg.svg",
      logoname + "_logomark_hexagon_primbg.svg",
      logoname + "_logomark_primbg.svg",
      logoname + "_logomark_square_accentbg.svg",
      logoname + "_logomark_rounded_accentbg.svg",
      logoname + "_logomark_circle_accentbg.svg",
      logoname + "_logomark_hexagon_accentbg.svg",
      logoname + "_logomark_accentbg.svg",
      logoname + "_wordmark_primbg.svg",
      logoname + "_wordmark_accentbg.svg"
    ];
  }

  // generate array svg elements
  function svggrab(selector) {
    // select all svg elements
    let htmls = [];
    let svgs = document.getElementByClassName(selector);

    // create and return arr of svgcodes
    for (let x in svgs) htmls.push(svgs[x].innerHTML);
    return htmls;
  }

  // create html element to store information
  function createCommandElement(htmlStrings, filepaths) {
    let element = document.createElement("p");

    // construct bash commands with html content
    let bashCommands = [];
    for (let x in htmlStrings) {
      bashCommands.push(`echo '${arr[x]} > ${filepaths[x]}\n`);
    }

    add click event listener to element so function operates

    // add html content to the element
    for (let x in arr) element.value.concat(" ", bashCommands[x]);
    element.style.display = 'none';
    document.body.appendChild(elememnt);
  }

  function download(filename, text) {

    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)

    element.style.display = 'none'



    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
};
