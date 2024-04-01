"use client";

import { Admin, Resource } from "react-admin";

import simpleRestProvider from "ra-data-simple-rest";

import {
  ChallengeCreate,
  ChallengeEdit,
  ChallengeList,
  ChallengeOptionCreate,
  ChallengeOptionEdit,
  ChallengeOptionList,
  CourseCreate,
  CourseEdit,
  CourseList,
  LessonCreate,
  LessonEdit,
  LessonList,
  UnitCreate,
  UnitEdit,
  UnitList,
} from ".";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        recordRepresentation="title"
        create={CourseCreate}
        list={CourseList}
        edit={CourseEdit}
      />

      <Resource
        name="units"
        recordRepresentation="title"
        create={UnitCreate}
        list={UnitList}
        edit={UnitEdit}
      />

      <Resource
        name="lessons"
        recordRepresentation="title"
        create={LessonCreate}
        list={LessonList}
        edit={LessonEdit}
      />

      <Resource
        name="challenges"
        recordRepresentation="question"
        create={ChallengeCreate}
        list={ChallengeList}
        edit={ChallengeEdit}
      />

      <Resource
        name="challengeOptions"
        recordRepresentation="text"
        create={ChallengeOptionCreate}
        list={ChallengeOptionList}
        edit={ChallengeOptionEdit}
        options={{ label: "Challenge options" }}
      />
    </Admin>
  );
};

export default App;
