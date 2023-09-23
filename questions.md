//POR QUE TENGO QUE INICIALIZAR?, SI NO LO INICIALIZO ME MARCA ERROR

components/list-component.component.ts
@Input() student: Student = {
id: 1,
name: 'string',
email: 'string',
age: 20,
enabled: true,
};

---

//EN CASO DE LA DIRECTIVA, INTENTÉ RECIBIR CON UN INPUT, PERO LA UNICA FORMA QUE ENCONTRE FUE ESTA

@Input('enabled') set enabled(condition: boolean) {
this.state = condition;
this.setBackground();
this.setBorderRadius();
this.SetWidth();
this.SetPadding();
this.setColor();
}

No pude la otra forma

// POR ULTIMO, TENGO UN ERROR EN CONSOLA JEJE
