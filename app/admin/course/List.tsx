import { Datagrid, List, TextField } from "react-admin";

const CourseList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="imgSrc" />
      </Datagrid>
    </List>
  );
};
export default CourseList;
