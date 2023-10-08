# App pomodoro

Con esta herramienta buscamos que el usuario pueda ser más productivos a la hora de realizar una tarea.

### Herramientas

- HTML
- CSS
- JAVASCRIPT
- TRELLO

### APP

![Pomodoro](https://gcdnb.pbrd.co/images/8578Y4ZViUNW.png?o=1)

### Código

<!-- Permite inicializar la tarea -->

```Js
starButtons.forEach((button) => {
button.addEventListener('click', (e) => {
if(!timer){
const id = button.getAttribute('data-id');
starButtonHandler(id);
button.textContent = 'In progress...';
}
});
});

```
