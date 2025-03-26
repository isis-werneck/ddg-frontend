import { type UserIdentity } from "react-admin";

import { PdfFileType } from "../hooks/usePdfFormData";
import { Role } from "../types/Role";

// Permissions for editors
const editorPermissions: PermissionItem = {
  teachers: true,
  courses: true,
  modules: true,
  learning_outcomes: true,
  companies: true,
  training_actions: true,
  students: true,
  professional_families: true,
  training_cycles: true,
  training_action_programs: true,
  multilevel_menu: true,
  download_files: true,
  pdf_downloads: true,
  download_file_types: true,
};

// Permissions for viewers
const viewerPermissions: PermissionItem = {
  companies: {
    list: true,
    show: true,
    create: true,
  },
  students: {
    list: true,
    show: true,
  },
  courses: {
    list: true,
    show: true,
  },
  teachers: {
    show: true,
  },
  learning_outcomes: {
    list: true,
  },
  users: {
    show: true,
    list: true,
  },
  modules: {
    list: true,
  },
  download_files: true,
  pdf_downloads: true,
  download_file_types: true,
};

const teacherPermissions: PermissionItem = {
  download_file_types: {
    fp: true,
  },
  download_files: {
    [PdfFileType.FFE_EVALUACION_PRL_ANEXO1]: true,
  },
  companies: {
    list: true,
  },
  courses: {
    list: true,
  },
  students: {
    list: true,
  },
  modules: {
    list: true,
  },
};

// Permissions for all users (all users has role user)
const userPermissions: PermissionItem = {
  users: {
    edit: {
      record: (user: UserIdentity, record?: Record<string, unknown> | null) =>
        user.id === record?.id,
    },
  },
};

export type RecordFunction = (
  user: UserIdentity,
  record?: Record<string, unknown>,
) => boolean;

export type PermissionItem =
  | {
      // key has to be a resource or an action
      [key: string]: PermissionItem | RecordFunction | boolean;
    }
  | boolean;

export type PermissionsType = {
  [key in Role]: PermissionItem;
};

export const Permissions: PermissionsType = {
  [Role.admin]: true,
  [Role.editor]: editorPermissions,
  [Role.viewer]: viewerPermissions,
  [Role.user]: userPermissions,
  [Role.teacher]: teacherPermissions,
};
