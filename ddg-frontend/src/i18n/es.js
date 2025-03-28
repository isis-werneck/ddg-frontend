import {
  companies,
  courses,
  general_settings,
  learning_outcomes,
  modules,
  pdf_downloads,
  professional_families,
  students,
  teachers,
  training_action_programs,
  training_actions,
  training_cycles,
  users,
} from "./es/resources/";

import { pdf } from "./es/pages/pdf";
import spanishMessages from "@blackbox-vision/ra-language-spanish/index";

export const es = {
  ...spanishMessages,
  ra: {
    ...spanishMessages.ra,
    action: {
      ...spanishMessages.ra.action,
      list: "Listar",
      select_columns: "Columnas",
      remove_all_filters: "Borrar todos los filtros",
      add_filter: "Filtros",
      select_all: "Seleccionar todo",
    },
    configurable: {
      ...spanishMessages.ra.configurable,
      customize: "Configurar",
    },
    validation: {
      ...spanishMessages.ra.validation,
      phone: "Telefóno incorrecto",
      nif: "Debe ser un NIF/NIE/CIF válido",
      nifOrPassport: "Debe ser un documento válido (sólo números y letras - no incluya espacios o guiones)",
      unique: "Ya existe un elemento con ese valor.  Este valor debe ser único",
      password: "La contraseña debe contenera al menos 8 caracteres",
      equalToField: "Los dos campos deben ser iguales",
    },
    navigation: {
      ...spanishMessages.ra.navigation,
      no_filtered_results:
        "No se han encontrado resultados para los filtros actuales",
      clear_filters: "Borrar filtros",
      goto_last: "Ir al final",
      goto_first: "Volver al principio",
    },
    saved_queries: {
      new_label: "Guardar consulta...",
      label: "Consultas guardadas",
      query_name: "Nombre de la consulta",
      new_dialog_title: "Guardar consulta actual como",
      remove_label: "Eliminar consulta guardada",
      remove_label_with_name: 'Eliminar consulta "%{name}"',
      remove_dialog_title: "¿Eliminar consulta guardada?",
      remove_message:
        "¿Estás seguro de querer eliminar este elemento de la lista de consultas guardadas?",
      help: "Filtrar la lista y guardar esta consulta para más tarde",
    },
    auth: {
      ...spanishMessages.ra.auth,
      username: "Email/Usuario",
      password: "Contraseña",
      welcome: "Bienvenido, inicie sesión",
      insert_credentials: "Introduzca sus credenciales",
      token_expired: "Su sesión ha expirado",
    },
    page: {
      ...spanishMessages.ra.page,
      authentication_error: "Error de autenticación",
      access_denied: "Error de autenticación",
    },
    message: {
      ...spanishMessages.ra.message,
      authentication_error: "No se puede mostrar el contenido solicitado",
      access_denied: "No se puede mostrar el contenido solicitado",
    },
  },
  resources: {
    students,
    companies,
    modules,
    learning_outcomes,
    courses,
    training_actions,
    users,
    teachers,
    training_action_programs,
    training_cycles,
    professional_families,
    general_settings,
    pdf_downloads,
    default: {
      fields: {
        createdAt: "Fecha Creación",
        updatedAt: "Fecha Actualización",
      },
    },
  },
  menu: {
    maintenance: "Mantenimiento",
    profile: "Perfil",
  },
  pages: {
    ...spanishMessages.pages,
    dashboard: "Dashboard",
    edit_title: "Editando %{resource} %{data}",
    show_title: "%{resource} %{data}",
    pdf,
  },
  gender: {
    male: "Hombre",
    female: "Mujer",
    other: "Otro",
  },
  nationality: {
    spanish: "Española",
  },
  import: {
    import_csv: "Importar CSV",
    importing: "Importando...",
    select_file: "Seleccione un archivo",
    success: "Importación exitosa",
    error: "Importación fallida",
    errors: "Importación fallida: \n %{message}",
    delimiter: "Delemitador de campos",
    enclosure: "Delimitador de texto",
    escape: "Caracter de escape",
    encoding: "Codificación del archivo",
    import: "Importar",
    cancel: "Cancelar",
    close: "Cerrar",
    options: "Opciones",
    download_template: "Descargar Plantilla",
  },
  roles: {
    ROLE_ADMIN: "Administrador",
    ROLE_USER: "Usuario",
    ROLE_EDITOR: "Editor",
    ROLE_VIEWER: "Tutor",
    ROLE_TEACHER: "Profesor",
  },
  intervals: {
    day: "Día",
    week: "Semana",
    month: "Mes",
    year: "Año",
    weekly: "Semanal",
    monthly: "Mensual",
    yearly: "Anual",
    daily: "Diario",
    other: "Otros",
  },
};
