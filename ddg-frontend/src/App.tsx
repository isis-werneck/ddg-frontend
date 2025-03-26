import { AdminGuesser, hydraSchemaAnalyzer } from "@api-platform/admin";
import {
  Book,
  Cyclone,
  DisplaySettings,
  LocalLibrary,
  MenuBook,
  MenuBookTwoTone,
  People,
  PeopleAltOutlined,
  School,
  Store,
  SupervisedUserCircleRounded,
  ViewModule,
} from "@mui/icons-material";
import { CustomRoutes, Resource } from "react-admin";
import {
  TeacherCreate,
  TeacherEdit,
  TeacherList,
  TeacherShow,
} from "./components/resources/teacher";
import {
  UserCreate,
  UserEdit,
  UserList,
  UserShow,
} from "./components/resources/user";

import { AppLayout } from "./layout/AppLayout.js";
import { CompanyCreate } from "./components/resources/company/CompanyCreate.js";
import { CompanyEdit } from "./components/resources/company/CompanyEdit.js";
import { CompanyList } from "./components/resources/company/CompanyList.js";
import { CompanyShow } from "./components/resources/company/CompanyShow.js";
import { CourseCreate } from "./components/resources/course/CourseCreate.js";
import { CourseEdit } from "./components/resources/course/CourseEdit.js";
import { CourseList } from "./components/resources/course/CourseList.js";
import { CourseShow } from "./components/resources/course/CourseShow.js";
import { Dashboard } from "./pages/Dashboard";
import { GeneralSettingsEdit } from "./components/resources/general_settings/GeneralSettingsEdit.tsx";
import { GeneralSettingsList } from "./components/resources/general_settings/GeneralSettingsList.js";
import { LearningOutcomeCreate } from "./components/resources/learning_outcome/LearningOutcomeCreate.js";
import { LearningOutcomeEdit } from "./components/resources/learning_outcome/LearningOutcomeEdit.js";
import { LearningOutcomeList } from "./components/resources/learning_outcome/LearningOutcomeList.js";
import { LearningOutcomeShow } from "./components/resources/learning_outcome/LearningOutcomeShow.js";
import { LoginPage } from "./pages/LoginPage.js";
import { ModuleCreate } from "./components/resources/module/ModuleCreate.js";
import { ModuleEdit } from "./components/resources/module/ModuleEdit.js";
import { ModuleList } from "./components/resources/module/ModuleList.js";
import { ModuleShow } from "./components/resources/module/ModuleShow.js";
import { PdfListPage } from "./pages/PdfListPage.tsx";
import { PdfPage } from "./pages/PdfPage";
import { ProfessionalFamilyCreate } from "./components/resources/professional_family/ProfessionalFamilyCreate.js";
import { ProfessionalFamilyEdit } from "./components/resources/professional_family/ProfessionalFamilyEdit.js";
import { ProfessionalFamilyList } from "./components/resources/professional_family/ProfessionalFamilyList.js";
import { ProfessionalFamilyShow } from "./components/resources/professional_family/ProfessionalFamilyShow.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { Route } from "react-router-dom";
import { StudentCreate } from "./components/resources/student/StudentCreate";
import { StudentEdit } from "./components/resources/student/StudentEdit";
import { StudentList } from "./components/resources/student/StudentList";
import { StudentShow } from "./components/resources/student/StudentShow";
import { TrainingActionCreate } from "./components/resources/training_action/TrainingActionCreate.js";
import { TrainingActionEdit } from "./components/resources/training_action/TrainingActionEdit.js";
import { TrainingActionList } from "./components/resources/training_action/TrainingActionList.js";
import { TrainingActionProgramCreate } from "./components/resources/training_action_program/TrainingActionProgramCreate.js";
import { TrainingActionProgramEdit } from "./components/resources/training_action_program/TrainingActionProgramEdit.js";
import { TrainingActionProgramList } from "./components/resources/training_action_program/TrainingActionProgramList.js";
import { TrainingActionProgramShow } from "./components/resources/training_action_program/TrainingActionProgramShow.js";
import { TrainingActionShow } from "./components/resources/training_action/TrainingActionShow.js";
import { TrainingCycleCreate } from "./components/resources/training_cycle/TrainingCycleCreate.js";
import { TrainingCycleEdit } from "./components/resources/training_cycle/TrainingCycleEdit.js";
import { TrainingCycleList } from "./components/resources/training_cycle/TrainingCycleList.js";
import { TrainingCycleShow } from "./components/resources/training_cycle/TrainingCycleShow.js";
import { authProvider } from "./auth/authProvider.js";
import { dataProvider } from "./dataProvider.js";
import { i18nProvider } from "./i18nProvider.js";
import { theme } from "./theme.ts";

export const App = () => {
  return (
    <AdminGuesser
      layout={AppLayout}
      dataProvider={dataProvider}
      schemaAnalyzer={hydraSchemaAnalyzer()}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      requireAuth
      loginPage={LoginPage}
      theme={theme}
    >
      <CustomRoutes>
        <Route path="pdf" element={<PdfPage />} />
        <Route path="pdf-history" element={<PdfListPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </CustomRoutes>
      <Resource
        name="users"
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
        icon={() => <SupervisedUserCircleRounded color="secondary" />}
      />
      <Resource
        name="students"
        list={StudentList}
        edit={StudentEdit}
        create={StudentCreate}
        show={StudentShow}
        icon={PeopleAltOutlined}
      />
      <Resource
        name="teachers"
        list={TeacherList}
        edit={TeacherEdit}
        create={TeacherCreate}
        show={TeacherShow}
        icon={() => <People />}
      />
      <Resource
        name="companies"
        list={CompanyList}
        edit={CompanyEdit}
        create={CompanyCreate}
        show={CompanyShow}
        icon={() => <Store />}
      />
      <Resource
        name="professional_families"
        list={ProfessionalFamilyList}
        edit={ProfessionalFamilyEdit}
        create={ProfessionalFamilyCreate}
        show={ProfessionalFamilyShow}
        icon={() => <Book />}
      />
      <Resource
        name="training_cycles"
        list={TrainingCycleList}
        edit={TrainingCycleEdit}
        show={TrainingCycleShow}
        create={TrainingCycleCreate}
        icon={() => <Cyclone />}
      />
      <Resource
        name="courses"
        list={CourseList}
        edit={CourseEdit}
        show={CourseShow}
        create={CourseCreate}
        icon={() => <School />}
        recordRepresentation="name"
      />
      <Resource
        name="modules"
        list={ModuleList}
        edit={ModuleEdit}
        create={ModuleCreate}
        show={ModuleShow}
        icon={() => <ViewModule />}
      />
      <Resource
        name="learning_outcomes"
        list={LearningOutcomeList}
        edit={LearningOutcomeEdit}
        create={LearningOutcomeCreate}
        show={LearningOutcomeShow}
        icon={() => <LocalLibrary />}
      />
      <Resource
        name="training_actions"
        list={TrainingActionList}
        edit={TrainingActionEdit}
        show={TrainingActionShow}
        create={TrainingActionCreate}
        icon={() => <MenuBook />}
      />
      <Resource
        name="training_action_programs"
        list={TrainingActionProgramList}
        edit={TrainingActionProgramEdit}
        show={TrainingActionProgramShow}
        create={TrainingActionProgramCreate}
        icon={() => <MenuBookTwoTone />}
      />
      <Resource
        name="general_settings"
        list={GeneralSettingsList}
        edit={GeneralSettingsEdit}
        icon={() => <DisplaySettings />}
      />
    </AdminGuesser>
  );
};
