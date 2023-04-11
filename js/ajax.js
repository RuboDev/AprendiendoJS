// (() => { //AJAX usando el objeto XMLHttpRequest();
//   const xhr = new XMLHttpRequest(),
//   $xhr = document.getElementById("xhr"),
//   $fragment = document.createDocumentFragment();

  
//   xhr.addEventListener("readystatechange", (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       //console.log(xhr);
//       //console.log("Éxito");
//       //console.log(xhr.responseText);
//       //$xhr.innerHTML = xhr.responseText;
//       let json = JSON.parse(xhr.responseText);
//       //console.log(json);
//       json.forEach(el => {
//         const $li = document.createElement("li");
//         $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//         $fragment.appendChild($li);
//       });
//       $xhr.appendChild($fragment);
//     }else{
//       //console.log("error");
//       /* console.log(xhr); si xhr.statusText es igual a {} valida a false
//       console.log({} === true); //false */
//       let message = xhr.statusText || "Ocurrió un error";
//       $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//     }
    
//   })
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   // xhr.open("GET", "assets/users.json");
//   xhr.send();
// })();

// API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
  $fragment = document.createDocumentFragment();
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.ok ? res.json(): Promise.reject(res))
    .then((json) => {
      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
  .catch(err => {
    console.log("Estamos en el catch",err);
  })
  .finally(()=>{
    console.log("Esto se ejecutará independientemente del resultado de la promesa fetch");
  })
})();