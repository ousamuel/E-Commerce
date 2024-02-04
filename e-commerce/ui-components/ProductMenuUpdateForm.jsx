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
import { getProductMenu } from "../../src/graphql/queries";
import { updateProductMenu } from "../../src/graphql/mutations";
const client = generateClient();
export default function ProductMenuUpdateForm(props) {
  const {
    id: idProp,
    productMenu: productMenuModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    productName: "",
    description: "",
    price: "",
    stockQuantity: "",
    createdTime: "",
    updatedTime: "",
  };
  const [productName, setProductName] = React.useState(
    initialValues.productName
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [stockQuantity, setStockQuantity] = React.useState(
    initialValues.stockQuantity
  );
  const [createdTime, setCreatedTime] = React.useState(
    initialValues.createdTime
  );
  const [updatedTime, setUpdatedTime] = React.useState(
    initialValues.updatedTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productMenuRecord
      ? { ...initialValues, ...productMenuRecord }
      : initialValues;
    setProductName(cleanValues.productName);
    setDescription(cleanValues.description);
    setPrice(cleanValues.price);
    setStockQuantity(cleanValues.stockQuantity);
    setCreatedTime(cleanValues.createdTime);
    setUpdatedTime(cleanValues.updatedTime);
    setErrors({});
  };
  const [productMenuRecord, setProductMenuRecord] =
    React.useState(productMenuModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProductMenu.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProductMenu
        : productMenuModelProp;
      setProductMenuRecord(record);
    };
    queryData();
  }, [idProp, productMenuModelProp]);
  React.useEffect(resetStateValues, [productMenuRecord]);
  const validations = {
    productName: [],
    description: [],
    price: [],
    stockQuantity: [],
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
          productName: productName ?? null,
          description: description ?? null,
          price: price ?? null,
          stockQuantity: stockQuantity ?? null,
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
            query: updateProductMenu.replaceAll("__typename", ""),
            variables: {
              input: {
                id: productMenuRecord.id,
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
      {...getOverrideProps(overrides, "ProductMenuUpdateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={false}
        isReadOnly={false}
        value={productName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName: value,
              description,
              price,
              stockQuantity,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.productName ?? value;
          }
          if (errors.productName?.hasError) {
            runValidationTasks("productName", value);
          }
          setProductName(value);
        }}
        onBlur={() => runValidationTasks("productName", productName)}
        errorMessage={errors.productName?.errorMessage}
        hasError={errors.productName?.hasError}
        {...getOverrideProps(overrides, "productName")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName,
              description: value,
              price,
              stockQuantity,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              productName,
              description,
              price: value,
              stockQuantity,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Stock quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stockQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productName,
              description,
              price,
              stockQuantity: value,
              createdTime,
              updatedTime,
            };
            const result = onChange(modelFields);
            value = result?.stockQuantity ?? value;
          }
          if (errors.stockQuantity?.hasError) {
            runValidationTasks("stockQuantity", value);
          }
          setStockQuantity(value);
        }}
        onBlur={() => runValidationTasks("stockQuantity", stockQuantity)}
        errorMessage={errors.stockQuantity?.errorMessage}
        hasError={errors.stockQuantity?.hasError}
        {...getOverrideProps(overrides, "stockQuantity")}
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
              productName,
              description,
              price,
              stockQuantity,
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
              productName,
              description,
              price,
              stockQuantity,
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
          isDisabled={!(idProp || productMenuModelProp)}
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
              !(idProp || productMenuModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
