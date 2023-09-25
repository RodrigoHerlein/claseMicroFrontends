class MiComponente extends HTMLElement {

constructor(){
	super();
	this.innerHTML = '<p>No se que pelicula poner</p>';
}
}
customElements.define("team-e",MiComponente);
