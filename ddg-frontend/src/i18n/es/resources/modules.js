export const modules = {
  name: "Asignatura/Módulo||||Asignaturas/Módulos",
  fields: {
    name: "Nombre",
    code: "Código",
    course: "Curso",
  },
  validation: {
    unique: "Ya existe una asignatura/módulo con ese código para ese curso.",
  },
};
