/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUsers } from "../../src/graphql/queries";
import { updateUsers } from "../../src/graphql/mutations";
const client = generateClient();
export default function UsersUpdateForm(props) {
  const {
    id: idProp,
    users: usersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    email: "",
    passwordHash: "",
    rewardPoints: "",
    createdTime: "",
    updatedTime: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [passwordHash, setPasswordHash] = React.useState(
    initialValues.passwordHash
  );
  const [rewardPoints, setRewardPoints] = React.useState(
    initialValues.rewardPoints
  );
  const [createdTime, setCreatedTime] = React.useState(
    initialValues.createdTime
  );
  const [updatedTime, setUpdatedTime] = React.useState(
    initialValues.updatedTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setEmail(cleanValues.email);
    setPasswordHash(cleanValues.passwordHash);
    setRewardPoints(cleanValues.rewardPoints);
    setCreatedTime(cleanValues.createdTime);
    setUpdatedTime(cleanValues.updatedTime);
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(usersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUsers.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUsers
        : usersModelProp;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, usersModelProp]);
  React.useEffect(resetStateValues, [usersRecord]);
  const validations = {
    username: [],
    email: [{ type: "Email" }],
    passwordHash: [],
    rewardPoints: [],
    createdTime: [],
    updatedTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username: username ?? null,
          email: email ?? null,
          passwordHash: passwordHash ?? null,
          rewardPoints: rewardPoints ?? null,
          createdTime: createdTime ?? null,
          updatedTime: updatedTime ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUsers.replaceAll("__typename", ""),
            variables: {
              input: {
                id: usersRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              email,
              passwordHash,
              rewardPoints,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email: value,
              passwordHash,
              rewardPoints,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password hash"
        isRequired={false}
        isReadOnly={false}
        value={passwordHash}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              passwordHash: value,
              rewardPoints,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.passwordHash ?? value;
          }
          if (errors.passwordHash?.hasError) {
            runValidationTasks("passwordHash", value);
          }
          setPasswordHash(value);
        }}
        onBlur={() => runValidationTasks("passwordHash", passwordHash)}
        errorMessage={errors.passwordHash?.errorMessage}
        hasError={errors.passwordHash?.hasError}
        {...getOverrideProps(overrides, "passwordHash")}
      ></TextField>
      <TextField
        label="Reward points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rewardPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              email,
              passwordHash,
              rewardPoints: value,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.rewardPoints ?? value;
          }
          if (errors.rewardPoints?.hasError) {
            runValidationTasks("rewardPoints", value);
          }
          setRewardPoints(value);
        }}
        onBlur={() => runValidationTasks("rewardPoints", rewardPoints)}
        errorMessage={errors.rewardPoints?.errorMessage}
        hasError={errors.rewardPoints?.hasError}
        {...getOverrideProps(overrides, "rewardPoints")}
      ></TextField>
      <TextField
        label="Created time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdTime && convertToLocal(new Date(createdTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              username,
              email,
              passwordHash,
              rewardPoints,
              createdTime: value,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.createdTime ?? value;
          }
          if (errors.createdTime?.hasError) {
            runValidationTasks("createdTime", value);
          }
          setCreatedTime(value);
        }}
        onBlur={() => runValidationTasks("createdTime", createdTime)}
        errorMessage={errors.createdTime?.errorMessage}
        hasError={errors.createdTime?.hasError}
        {...getOverrideProps(overrides, "createdTime")}
      ></TextField>
      <TextField
        label="Updated time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedTime && convertToLocal(new Date(updatedTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              username,
              email,
              passwordHash,
              rewardPoints,
              createdTime,
              updatedTime: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedTime ?? value;
          }
          if (errors.updatedTime?.hasError) {
            runValidationTasks("updatedTime", value);
          }
          setUpdatedTime(value);
        }}
        onBlur={() => runValidationTasks("updatedTime", updatedTime)}
        errorMessage={errors.updatedTime?.errorMessage}
        hasError={errors.updatedTime?.hasError}
        {...getOverrideProps(overrides, "updatedTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
