let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `w-1/4 flex justify-center mt-5`;
   task.innerHTML = `
         <p class="w-1/2">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class=" bg-green-400 rounded-md font-bold px-2">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="ml-6  bg-red-500 rounded-md font-bold px-2">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}