async function obtenerModulos() {
  // Mostrar el indicador de carga
  document.getElementById('loading').style.display = 'block';

  try {
    const response = await fetch('http://localhost:5000/api/modules');
    const data = await response.json();
  
    const lista = document.getElementById('modules-list');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos módulos
  
    // Mostrar los módulos de manera interactiva
    data.forEach(modulo => {
      const li = document.createElement('li');
      li.classList.add('module-item');

      li.innerHTML = `
        <h3>${modulo.nombre}</h3>
        <p>${modulo.descripcion}</p>
        <small>Duración: 2 horas</small>
        <button onclick="mostrarDetalles('${modulo.id}')">Ver detalles</button>
      `;
      lista.appendChild(li);
    });

  } catch (error) {
    console.error('Error al obtener los módulos:', error);
    alert('No se pudo obtener la lista de módulos');
  } finally {
    // Ocultar el indicador de carga una vez que los datos estén listos
    document.getElementById('loading').style.display = 'none';
  }
}

function mostrarDetalles(id) {
  alert(`Aquí mostraríamos más detalles del módulo con ID: ${id}`);
}


  
