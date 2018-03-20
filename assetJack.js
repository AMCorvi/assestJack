function createLogoFile(logo) {
  if (typeof logo === !"string") {
    return console.log("function takes only a single parameter of type string");
  }

  // runs codesuite
  // **function declarations below**
  retrieveFile(logo);
}

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
    logoname + "_wordmark_accentbg.svg",
    logoname + "_fulllogo_multicolor1.svg",
    logoname + "_fulllogo_multicolor2.svg",
    logoname + "_fulllogo_multicolor3.svg",
    logoname + "_fulllogo_multicolor4.svg",
    logoname + "_fulllogo_anim.svg"
  ];
}

// generate array svg elements
function svggrab(selector) {
  // select all svg elements
  let htmls = [];

  let svgs = document.querySelectorAll(selector);

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
    bashCommands.push(`echo '${htmlStrings[x]}' > ${filepaths[x]}\n`);
  }

  console.log(bashCommands);

  // TODO: ?add click event listener to element so function operates

  // add html content to the element
  for (let x in bashCommands) element.innerText.concat(" ", bashCommands[x]);
  element.style.display = "none";
  document.body.appendChild(element);

  return element;
}

/*
   * helper fucntoin that create and downloadable
   * element and initiates that download
   */
function download(filename, text) {
  // create download
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";

  // initiate download
  element.click();

  // remove element from window.document
  document.body.removeChild(element);
}

// intiate whole procedure
function retrieveFile(logo) {
  let commandsElement = createCommandElement(
    svggrab(".two-logos .artboard"),
    createFilenames(logo)
  );

  let bashCommands = commandsElement.value;

  // download commandfile
  download(`${logo}.sh`, bashCommands);

  // clean up: remove element from DOM
  document.body.removeChild(commandsElement);
}
