import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { TextInput, required } from "react-admin";

import { TeacherHasUser } from "./TeacherEditForm";
import { password } from "../../../validate/password";
import { useFormContext } from "react-hook-form";

type HasUserSelectorProps = {
  setUserNew: (userNew: TeacherHasUser) => void;
  userNew: TeacherHasUser;
};

export const HasUserSelector = ({
  setUserNew,
  userNew,
}: HasUserSelectorProps) => {
  const { setValue } = useFormContext();

  const handleUserNewChange = () => {
    setValue("user", null, { shouldDirty: true });
  };
  return (
    <RadioGroup name="userNew" value={userNew} onChange={handleUserNewChange}>
      <FormControlLabel
        value={TeacherHasUser.NONE}
        control={
          <Radio
            onChange={() => {
              setUserNew(TeacherHasUser.NONE);
            }}
          />
        }
        label="Sin usuario asignado"
      />
      <FormControlLabel
        value={TeacherHasUser.NEW}
        control={
          <Radio
            onChange={() => {
              setUserNew(TeacherHasUser.NEW);
            }}
          />
        }
        label="Crear nuevo usuario al guardar con los datos del profesor"
      />
      {userNew === TeacherHasUser.NEW && (
        <TextInput
          source="user.password"
          type="password"
          name="password"
          label="Contraseña"
          validate={[password, required()]}
        />
      )}
      <FormControlLabel
        value={TeacherHasUser.EXISTING}
        control={<Radio onChange={() => setUserNew(TeacherHasUser.EXISTING)} />}
        label="Utilizar usuario existente"
      />
    </RadioGroup>
  );
};
