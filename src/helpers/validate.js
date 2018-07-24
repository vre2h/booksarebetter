export default function(values) {
  const errors = {};
  const requiredFields = ['firstName', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
}
