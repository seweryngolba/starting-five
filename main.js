import { pgs, sgs, sfs, pfs, cs } from "./players.js";

const selectedPg = document.querySelector("#selected-pg");
const selectedSg = document.querySelector("#selected-sg");
const selectedSf = document.querySelector("#selected-sf");
const selectedPf = document.querySelector("#selected-pf");
const selectedC = document.querySelector("#selected-c");
const getPg = document.querySelector("#getPg");
const getSg = document.querySelector("#getSg");
const getSf = document.querySelector("#getSf");
const getPf = document.querySelector("#getPf");
const getC = document.querySelector("#getC");
const jerseyStylePg = document.querySelector("#jersey-style-pg");
const jerseyStyleSg = document.querySelector("#jersey-style-sg");
const jerseyStyleSf = document.querySelector("#jersey-style-sf");
const jerseyStylePf = document.querySelector("#jersey-style-pf");
const jerseyStyleC = document.querySelector("#jersey-style-c");
const pgName = document.querySelector("#pg-name");
const sgName = document.querySelector("#sg-name");
const sfName = document.querySelector("#sf-name");
const pfName = document.querySelector("#pf-name");
const cName = document.querySelector("#c-name");
const pgNumber = document.querySelector("#pg-number");
const sgNumber = document.querySelector("#sg-number");
const sfNumber = document.querySelector("#sf-number");
const pfNumber = document.querySelector("#pf-number");
const cNumber = document.querySelector("#c-number");

const pickPg = () => {
  const randomPg = Math.floor(Math.random() * pgs.length);
  const { name, lastName, number, jersey, numColor } = pgs[randomPg];

  selectedPg.textContent = `PG: ${name}`;
  pgName.textContent = `${lastName}`;
  pgNumber.textContent = `${number}`;
  jerseyStylePg.style.fill = `${jersey}`;
  pgNumber.style.color = `${numColor}`;
};

getPg.addEventListener("click", pickPg);

const pickSg = () => {
  const randomSg = Math.floor(Math.random() * sgs.length);
  const { name, lastName, number, jersey, numColor } = sgs[randomSg];

  selectedSg.textContent = `SG: ${name}`;
  sgName.textContent = `${lastName}`;
  sgNumber.textContent = `${number}`;
  jerseyStyleSg.style.fill = `${jersey}`;
  sgNumber.style.color = `${numColor}`;
};

getSg.addEventListener("click", pickSg);

const pickSf = () => {
  const randomSf = Math.floor(Math.random() * sfs.length);
  const { name, lastName, number, jersey, numColor } = sfs[randomSf];

  selectedSf.textContent = `SF: ${name}`;
  sfName.textContent = `${lastName}`;
  sfNumber.textContent = `${number}`;
  jerseyStyleSf.style.fill = `${jersey}`;
  sfNumber.style.color = `${numColor}`;
};

getSf.addEventListener("click", pickSf);

const pickPf = () => {
  const randomPf = Math.floor(Math.random() * pfs.length);
  const { name, lastName, number, jersey, numColor } = pfs[randomPf];

  selectedPf.textContent = `PF: ${name}`;
  pfName.textContent = `${lastName}`;
  pfNumber.textContent = `${number}`;
  jerseyStylePf.style.fill = `${jersey}`;
  pfNumber.style.color = `${numColor}`;
};

getPf.addEventListener("click", pickPf);

const pickC = () => {
  const randomC = Math.floor(Math.random() * cs.length);
  const { name, lastName, number, jersey, numColor } = cs[randomC];

  selectedC.textContent = `C: ${name}`;
  cName.textContent = `${lastName}`;
  cNumber.textContent = `${number}`;
  jerseyStyleC.style.fill = `${jersey}`;
  cNumber.style.color = `${numColor}`;
};

getC.addEventListener("click", pickC);
