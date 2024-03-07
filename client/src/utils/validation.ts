export const validateTaskForm = (
  title: string,
  details: string,
  validationErrors
) => {
  let isValid = true;

  if (!title || title.trim().length == 0) {
    validationErrors.value.title = "Title is required";
    isValid = false;
  } else {
    validationErrors.value.title = "";
  }
  if (!details || details.trim().length == 0) {
    validationErrors.value.details = "Details are required";
    isValid = false;
  } else {
    validationErrors.value.details = "";
  }

  return isValid;
};
