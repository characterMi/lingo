import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />

        <BooleanInput source="correct" label="Correct option" />

        <ReferenceInput source="challengeId" reference="challenges" />

        <TextInput source="imgSrc" label="Image URL" />

        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Edit>
  );
};
export default ChallengeOptionEdit;
