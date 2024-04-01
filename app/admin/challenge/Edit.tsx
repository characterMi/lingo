import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  SelectInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" />

        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />

        <ReferenceInput source="lessonId" reference="lessons" />

        <NumberInput source="order" />
      </SimpleForm>
    </Edit>
  );
};
export default ChallengeEdit;
