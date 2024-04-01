import { SimpleForm, Edit, TextInput, required } from "react-admin";

const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="ID" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imgSrc" validate={[required()]} label="Image" />
      </SimpleForm>
    </Edit>
  );
};
export default CourseEdit;
