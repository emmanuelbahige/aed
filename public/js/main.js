// Commande d'édition
function format(cmd, value = null) {
  document.execCommand(cmd, false, value);
  document.getElementById("editor").focus();
}

// Gestion du formulaire
document.getElementById("blogForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const intro = document.getElementById("intro").value.trim();
  const firstBLock = document.getElementById("firstBlock").innerHTML;
  const secondBlock = document.getElementById("secondBlock").innerHTML;

  if (!title || !intro || !firstBLock || !secondBlock) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Exemple : affichage du résultat dans la console
  console.log("Titre :", title);
  console.log("Introduction :", intro);
  console.log("Block 1 :", firstBLock);
  console.log("Block 2 :", secondBlock);

  alert("Article soumis avec succès ! (voir la console)");
  this.reset();
  document.getElementById("firstBlock").innerHTML = "";
  document.getElementById("secondBlock").innerHTML = "";
});