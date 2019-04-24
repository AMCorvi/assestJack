/* eslint-disable no-unused-vars */
/**
 * entrypoint for module.
 *
 * @param {string} logo name of logo processed
 */
function createLogoFile(logo) {
  if (typeof logo === !"string") {
    // eslint-disable-next-line no-console
    return console.error(
      "function takes only a single parameter of type string"
    );
  }

  // runs codesuite
  // **function declarations below**
  retrieveFile(logo);
}

/**
 * creates array of filenames for defined logo
 *
 * @param {string} logoname name of logo being generated
 * @returns {array} of filenames
 */
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

/**
 * generate array svg elements
 *
 * @param {string} selector DOM querySelection
 * @returns {array} of htmlString containing svgs
 */
function svggrab(selector) {
  // select all svg elements
  let htmls = [];

  let svgs = document.querySelectorAll(selector);

  // create and return arr of svgcodes
  for (let x = 0; x < svgs.length; x++) {
    console.log(`
    SVGS SIZE: ${svgs.length}
    EXTRA: ${ svgs.length > 19 ? (svgs[x]) : "NO EXTRA"  }
    HTMLS: ${htmls.length}
    EXTRA: ${ htmls.length > 19 ? (svgs[x]) : "NO EXTRA"  }
    `);
    htmls.push(svgs[x].innerHTML);
  }
  return htmls;
}

/**
 * // create html element to store information
 *
 * @param {array} htmlStrings html strings of svgs
 * @param {array} filepaths of filenames
 * @returns {object} html node element
 */
function createCommandElement(htmlStrings, filepaths) {
  let element = document.createElement("p");
  element.setAttribute("class", "commandElement");

  // construct bash commands with html content
  let bashCommands = [];
  for (let x in htmlStrings) {
    bashCommands.push(` echo '${htmlStrings[x]}' > ${filepaths[x]} `);
  }

  // TODO: ?add click event listener to element so function operates

  // add html content to the element
  for (let x in bashCommands) element.innerText += bashCommands[x];
  r
  element.style.display = "none";
  document.body.appendChild(element);

  return element;
}

/**
 * helper function that create and downloadable element and initiates that download
 *
 * @param {string} filename filename of exportable download
 * @param {string} text string of commands that will be written in file
 */
function download(filename, text) {
  // create download
  let element = document.createElement("a");

  element.setAttribute("class", "downloadable");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  const body = document.querySelector("body");
  body.appendChild(element);

  // initiate download
  element.click();

  // remove element from window.document
  // document.body.removeChild(element);
}

/**
 * intiate whole procedure
 *
 * @param {string} logo
 */
function retrieveFile(logo) {
  let commandsElement = createCommandElement(
    svggrab(".two-logos .artboard"),
    createFilenames(logo)
  );

  let bashCommands = commandsElement.innerText;

  // download commandfile
  download(`${logo}.sh`, bashCommands);

  // clean up: remove element from DOM
  // document.body.removeChild(commandsElement);
}

let svgstrings, lname, selectus, svg, run;
selectus = ".two-logos .artboard";
lname = createFilenames("erebus");
svg = document.querySelectorAll(selectus);
svgstrings = svggrab(selectus);
run = createLogoFile.bind(null, "erebus");
