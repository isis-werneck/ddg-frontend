export const learning_outcomes = {
  name: "Resultado de aprendizaje||||Resultados de aprendizaje",
  fields: {
    name: "Nombre",
    code: "Código RA",
    course: "Curso",
    "course.name": "Curso",
    module: "Asignatura/Módulo",
    "module.name": "Asignatura/Módulo",
    description: "Descripción",
  },
  validation: {
    unique: "Ya existe un resultado de aprendizaje para ese código, curso y asignatura.",
  },
};
