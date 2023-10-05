let prefix = ["your", "the"];
let pron = ["olympus", "granero"];
let adj = ["mamalon", "chingon", "bergas"];
let domain = [".com", ".org", ".mx", ".alv"];

let domainName = [];

function GenerateDomain() {
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < pron.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        for (let p = 0; p < domain.length; p++) {
          let div = document.createElement("div");
          div.innerText = `
                    ${prefix[i]}${pron[j]}${adj[k]}${domain[p]}
                    `;
          document.body.appendChild(div);
          //comentario chingon
        }
      }
    }
  }
}
window.onload = GenerateDomain();
