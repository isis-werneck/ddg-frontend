import type {
  Course_jsonld_course_read_timestamps,
  Teacher_jsonld_teacher_read_timestamps,
} from "../services/openapi";
import { useDataProvider, useGetIdentity, usePermissions } from "react-admin";
import { useEffect, useState } from "react";

import { Role } from "../types/Role";

export type UserCoursesResult = {
  ready: boolean;
  userCourses: Course_jsonld_course_read_timestamps[] | null;
  userTeacher: Teacher_jsonld_teacher_read_timestamps | null;
};

export const useUserCourses = (): UserCoursesResult => {
  const [ready, setReady] = useState<boolean>(false);
  const [courses, setCourses] = useState<
    Course_jsonld_course_read_timestamps[] | null
  >(null);

  const [teacher, setTeacher] =
    useState<Teacher_jsonld_teacher_read_timestamps | null>(null);

  const { isSuccess, data: permissions } = usePermissions();
  const { isSuccess: isIdentitySuccess, identity } = useGetIdentity();

  const dataProvider = useDataProvider();

  useEffect(() => {
    if (ready || !isIdentitySuccess || !isSuccess) {
      return;
    }

    const isTeacher = permissions?.roles?.some(
      (permission: Role) =>
        permission === Role.viewer || permission === Role.teacher,
    );

    if (isTeacher && identity?.user?.teacher) {
      dataProvider
        .getOne("teachers", {
          id: identity?.user?.teacher,
        })
        .then((response) => {
          const teacher = response.data;
          setTeacher(teacher);
          if (teacher && (teacher.courses.length || teacher.coursesFromModules.length)) {
            const ids = [...teacher.courses, ...teacher.coursesFromModules];
            dataProvider
              .getMany("courses", {
                ids: ids,
              })
              .then((response) => {
                setCourses(response.data);
                setReady(true);
              });
          } else {
            setCourses([]);
            setReady(true);
          }
        });
    } else {
      setCourses([]);
      setReady(true);
    }
  }, [
    dataProvider,
    identity,
    isIdentitySuccess,
    isSuccess,
    permissions,
    ready,
  ]);

  return { ready, userCourses: courses, userTeacher: teacher };
};
