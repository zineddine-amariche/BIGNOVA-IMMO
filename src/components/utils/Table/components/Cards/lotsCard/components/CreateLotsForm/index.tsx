import React, { useEffect } from "react";
import { Stack, useTheme } from "@mui/material";
import { PrimaryText } from "../../../../../../typography";
import { Formik } from "formik";
import Space from "../../../../../../../Layouts/Space";
import InputFeilds from "../../../../../../Inputs/InputFeilds";
import SelectMenue from "../../../../../../DropDown/SelectMenue";
import { createLotHooks } from "../../Hooks/useCreateLots";
import { StyledButton } from "../../../../../../Button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../../Redux/store";
import { getAllProjets } from "../../../../../../../../Redux/projects/slice";
import { getAllTypeLots } from "../../../../../../../../Redux/TypeDeLot/slice";



const CreateLotsForm: React.FC = () => {
  const theme = useTheme();

  const { initialState, validationSchema, onSubmit } = createLotHooks();
  const { isLoading: loader, allTypeLots } = useSelector(
    (state: RootState) => state.typeLots
  );

  const { exist, allProjets, isLoading } = useSelector(
    (state: RootState) => state.projects
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjets());
    dispatch(getAllTypeLots());
  }, [dispatch]);



  const convertDataToNewArray = (
    data: any[] 
  ): { name: string; value: string }[] => {
    if (!Array.isArray(data)) {
      return []; // Return an empty array if data is not an array
    }

    return data.map((item) => ({ name: item.typeName || item.name, value: item._id }));
  };

  let optioType = convertDataToNewArray(allTypeLots.data); 
  let optionProject = convertDataToNewArray(allProjets.data);

  return (
    <Stack
      p={3}
      bgcolor={theme.palette.primary.dark}
      width={"100%"}
      borderRadius={2}
      mt={1}
    >
      <PrimaryText
        fontSize={"25px"}
        text={"Create a fresh batch !"}
        color={theme.palette.primary.light}
        cursor
      />

      <Space space={20} />
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          const {
            numerodelot,
            surfacetotal,
            surfacesansbalcon,
            bloc,
            prix,
            etage,
            typelot,
            projet,
          } = values;

          return (
            <>
              <Stack width={"100%"} spacing={3} display="flex">
                <InputFeilds
                  label={"Numero de lot"}
                  error={errors.numerodelot && touched.numerodelot}
                  helperText={
                    errors.numerodelot && touched.numerodelot
                      ? errors.numerodelot
                      : ""
                  }
                  value={numerodelot}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"numerodelot"}
                  onBlur={() => {
                    setFieldTouched("numerodelot", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"surfacetotal"}
                  error={errors.surfacetotal && touched.surfacetotal}
                  helperText={
                    errors.surfacetotal && touched.surfacetotal
                      ? errors.surfacetotal
                      : ""
                  }
                  value={surfacetotal}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"surfacetotal"}
                  onBlur={() => {
                    setFieldTouched("surfacetotal", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"Surface sans balcon"}
                  error={errors.surfacesansbalcon && touched.surfacesansbalcon}
                  helperText={
                    errors.surfacesansbalcon && touched.surfacesansbalcon
                      ? errors.surfacesansbalcon
                      : ""
                  }
                  value={surfacesansbalcon}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"surfacesansbalcon"}
                  onBlur={() => {
                    setFieldTouched("surfacesansbalcon", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"bloc"}
                  error={errors.bloc && touched.bloc}
                  helperText={errors.bloc && touched.bloc ? errors.bloc : ""}
                  value={bloc}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"bloc"}
                  onBlur={() => {
                    setFieldTouched("bloc", true);
                  }}
                  shrink={true}
                />

                <InputFeilds
                  label={"prix"}
                  error={errors.prix && touched.prix}
                  helperText={errors.prix && touched.prix ? errors.prix : ""}
                  value={prix}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"prix"}
                  onBlur={() => {
                    setFieldTouched("prix", true);
                  }}
                  shrink={true}
                />
                <InputFeilds
                  label={"etage"}
                  error={errors.etage && touched.etage}
                  helperText={errors.etage && touched.etage ? errors.etage : ""}
                  value={etage}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"etage"}
                  onBlur={() => {
                    setFieldTouched("etage", true);
                  }}
                  shrink={true}
                />

                <SelectMenue
                  name="etage"
                  selectionTitle="Select a etat *"
                  data={optioType}
                  handleOpen={(val: number) => {
                    setFieldValue("typelot", val);
                  }}
                  error={
                    !!(errors.typelot && touched.typelot && errors.typelot)
                  }
                  helperText={
                    errors.typelot && touched.typelot ? errors.typelot : ""
                  }
                  value={typelot}
                  onBlur={() => {
                    setFieldTouched("typelot", true);
                  }}
                  // marginRight
                  label={""}
                />
                <SelectMenue
                  name="etage"
                  selectionTitle="Select a projet *"
                  data={optionProject}
                  handleOpen={(val: number) => {
                    setFieldValue("projet", val);
                  }}
                  error={!!(errors.projet && touched.projet && errors.projet)}
                  helperText={
                    errors.projet && touched.projet ? errors.projet : ""
                  }
                  value={projet}
                  onBlur={() => {
                    setFieldTouched("projet", true);
                  }}
                  // marginRight
                  label={""}
                />
              </Stack>
              <Space space={30} />

              <StyledButton type={null} onClick={handleSubmit}>Create</StyledButton>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default CreateLotsForm;

 