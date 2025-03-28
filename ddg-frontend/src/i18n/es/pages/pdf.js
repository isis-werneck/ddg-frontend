export const pdf = {
  title: "Descargar PDF",
  file_type_select: "Tipo de archivo",
  selected_items: "Elementos seleccionados: %{length}",
  finish: "Finalizar",
  next: "Siguiente",
  back: "Atrás",
  reset: "Reiniciar",
  select_type: "Seleccione el tipo de documento que desea generar",
  wizard_complete: "Su archivo ha sido generado",
  download: "Descargar",
  download_complete: "Su archivo ha sido descargado",
  download_error:
    "Se ha producido un error. No se ha podido descargar el archivo",
  document_number_select: "Número de Anexo",
  students_info_select: "Información de los estudiantes",
  related_select: "Documentos Relacionados",
  pdf_history_select: "Documentos para importar datos",
  pdf_history_select_subtitle:
    "Puede seleccionar documentos que hayan sido generados previamente.\nLos datos de los documentos seleccionados se importarán en los campos correspondientes.",
  related_select_info:
    "Para descargar este documento va a seleccionar una lista de estudiantes.\nEl archivo que se descargará será un archivo comprimido (.zip) que contendrá un documento por cada uno de los estudiantes seleccionados.\nSi lo desea, puede incluir también otros documentos relacionados para los mismos estudiantes y datos adicionales.",
  company_select: "Seleccione una empresa",
  students_select: "Seleccione estudiantes",
  course_select: "Seleccione un curso",
  module_select: "Seleccione un módulo/asignatura",
  training_action_select: "Seleccione una Acción Formativa",
  evaluation_requirements_select: "Requisitos de evaluación",
  unsafe_behaviors_record_select: "Conductas inseguras",
  no_students_selected: "No se han seleccionado estudiantes",
  ffe_fp_description: "Fase de Formación en empresa",
  ffe_fp: "FFE FP",
  fct_sepe_description: "Formación en centros de trabajo",
  fct_sepe: "FCT SEPE",
  document_names: {
    ffe_anexo1: "Convenio\n(Anexo 1)",
    ffe_anexo2_1: "Relación de Alumnos\n(Anexo 2.1)",
    ffe_anexo2_2: "Relación de Alumnos\n(Anexo 2.2)",
    ffe_anexo3_beca: "Beca\n(Anexo 3)",
    ffe_anexo_beca_intensivo: "Beca\n(Anexo 3)",
    ffe_anexo3_plan: "Plan de formación\n(Anexo 3)",
    ffe_anexo_seguimiento: "Ficha de Seguimiento\n(Documento 8)",
    ffe_anexo_valoracion_final: "Ficha de Valoracion\n(Documento 9)",
    ffe_evaluacion_prl_anexo1: "Evaluación PRL\n(Anexo1)",
    ffe_evaluacion_prl_anexo2: "Evaluación PRL\n(Anexo2)",
    fct_cp1: "CP1",
    fct_cp3: "CP3",
    fct_cp8: "CP8",
    fct_anexo1: "Convenio\n(Anexo 1)",
    fct_anexo2: "Declaración Responsable de la Empresa\n(Anexo 2)",
  },
  document_number: {
    already_exist:
      "El Número de Anexo debe ser asignado de manera correlativa. Para el documento que se desea generar, ya se han asignado números de anexo a documentos previos para la empresa seleccionada. En caso de que dichos documentos hayan sido presentados, se deberá utilizar un Número de Anexo nuevo. El número propuesto corresponde al siguiente valor válido.",
    previous_documents:
      "Los siguientes son los documentos previamente generados, junto con sus respectivos números",
    example:
      "Se espera que el Número de Anexo tenga el formato ###/##.\n\nPor ejemplo, 001/%{year}, 002/%{year}, etc.\nEl primer número se debe asignar de manera correlativa y el segundo los dos últimos dígitos del año en curso.",
  },
  custom_info: {
    title: "Información general",
    scholarshipAmount: "Importe de la beca (€)",
    studentsNumber: "Número de estudiantes",
    observations: "Observaciones",
    comments: "Observaciones",
    documentDate: "Fecha del documento",
    scholarship_amount_select: "Selección de la cantidad de la beca",
    students_number_select: "Número de estudiantes",
    observations_select: "Introduzca las observaciones",
    training_start_date_select: "Fecha de inicio de la formación",
    training_end_date_select: "Fecha de fin de la formación",
    startDate: "Fecha de inicio",
    endDate: "Fecha de fin",
    trainingStartDate: "Fecha de inicio",
    trainingEndDate: "Fecha de fin",
    training_start_date: "Fecha de inicio de la formación",
    training_end_date: "Fecha de fin de la formación",
    item_number: "Indicar nº de item",
    short_description:
      "Breve descripción de la conducta insegura llevada a cabo por el alumno/a.",
    behavior_qualification: "Calificación de la conducta insegura",
    behavior_consequence_qualification: "Consecuencias de la conducta insegura",
    occurrence_place: "Lugar de la ocurrencia",
    occurrence_date: "Fecha de la ocurrencia",
    evaluation_date: "Fecha de la evaluación",
    document_evaluation_results: "Resultados de la evaluación: Anexo",
    competences_acquisition_assessment:
      "VALORACIÓN DE LA ADQUISICIÓN DE COMPETENCIAS RELATIVAS A LA PREVENCIÓN DE RIESGOS LABORALES PARA EL ACCESO A LA FASE DE FORMACIÓN EN EMPRESA U ORGANISMO EQUIPARADO",
    reinforcement_assessment:
      "Incluir, si se considera oportuno, qué resultados de aprendizaje deben ser reforzados por parte del alumno:",
    select_options: {
      yes: "Sí",
      no: "No",
      not_applicable: "No procede",
      minor: "Leve",
      major: "Grave",
      veryMajor: "Muy grave",
      positive: "Positiva",
      negative: "Negativa",
    },
    add_fields: "Añadir entrada",
    delete_fields: "Eliminar entrada",
    register: "Registro",
    evaluation_questionary: "Cuestionario de evaluación",
    program: "Orden/Programa",
    recordNumber: "Orden/Expdte",
    action: "Acción",
    group: "Grupo",
    certificate: "Certificado de Profesionalidad",
    call: "Orden Convocatoria",
    ssResponsible:
      "Gestión y cotización al Régimen General de Seguridad Social",
    ssResponsibles: {
      company:
        "La empresa firmante de este convenio se responsabiliza del cumplimiento de las obligaciones de cotización a la Seguridad Social de los alumnos que realicen el módulo de prácticas de las acciones aquí referenciadas",
      center:
        "El centro de formación se responsabiliza del cumplimiento de las obligaciones de cotización a la Seguridad Social de los alumnos que realicen el módulo de prácticas de las acciones aquí referenciadas, en los centros de trabajo de la empresa firmante de este convenio",
    },
    jobTitle:
      "Denominación del puesto relacionado con la especialidad en el centro de trabajo de la empresa",
    jobTitle_helper: "** Indicar una sola línea",
    values: {
      center: "El Centro",
      company: "La Empresa",
    },
  },
  learning_outcomes: {
    title: "Resultados de Aprendizaje",
    info_title: "Opciones para los Resultados de Aprendizaje",
    integrallyInCompany: "Impartido íntegramente en la empresa",
    integrallyInCenter: "Impartido compartido con en el centro docente",
    noIntegrally: "Ninguna opción",
  },
  evaluation_requirements: {
    title: "Requisitos de evaluación",
    question1:
      "Identifica los factores de riesgo en su actividad (riesgos derivados del lugar y equipos de trabajo; riesgos físicos, químicos o biológicos; riesgos derivados de las condiciones ergonómicas del puesto de trabajo; riesgos psicosociales derivados de la organización del trabajo).",
    question2:
      "Identifica y sabe aplicar las medidas de prevención de riesgos laborales.",
    question3:
      "Conoce cuáles son los principales daños derivados de los factores de riesgo laboral (accidente de trabajo y enfermedad profesional, entre otros).",
    question4: "Realiza un seguimiento correcto de los protocolos de trabajo.",
    question5: "Utiliza correctamente los útiles y herramientas.",
    question6:
      "Usa de manera segura los equipamientos e instalaciones fijas SKF.",
    question7:
      "Identifica y hace un uso adecuado de los equipos de protección individual ( EPIs).",
    question8:
      "Identifica y sabe aplicar las medidas de prevención de riesgos laborales.",
    question9: "Identifica y respeta las medidas de protección colectiva.",
    question10: "Mantiene el orden y la limpieza en el entorno de trabajo.",
    question11:
      "En el desarrollo de la tarea su conducta resulta segura para la integridad física y psicológica de sus compañeros.",
  },
  signatory: {
    title: "Información para la firma",
    centerName: "Nombre del centro (Representante)",
    companyName: "Nombre de la empresa (Representante)",
    companyName2: "Nombre de la empresa (Representante 2)",
    place: "Lugar",
    date: "Fecha",
  },
  summary: {
    title: "Resumen",
    company: "Empresa",
    students: "Estudiantes",
    course: "Curso",
    module: "Asignatura/Módulo",
    training_action: "Acción Formativa",
    student_info: "Información del estudiante",
    learning_outcomes: "Información de los Resultados de Aprendizaje",
    signatory: "Información para la firma",
    document_type: "Tipo de documento",
    scholarship_amount: "Cantidad de la beca",
    students_number: "Número de estudiantes",
    observations: "Observaciones",
    training_start_date: "Inicio de la formación",
    training_end_date: "Fin de la formación",
    error:
      "No se han completado todas las acciones.  Por favor revise los datos introducidos",
    info: "Tenemos toda la información necesaria para generar el PDF.  Presione el botón de descarga para descargarlo.",
  },
  company_tutor: {
    title: "Información del tutor de la empresa",
    address: "Dirección del centro de trabajo",
  },
  copy_to_all: "Copiar a todo",
  copy_all_to_all: "Copiar todo a todos",
  show_stepper: "Mostrar/Ocultar pasos",
  duplicated_students:
    "Se han econctrado estudiantes duplicados.  Sólo se tomarán los datos del último documento",
};
