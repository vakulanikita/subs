import { Box } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { TextField } from '../components/form-input'

export default function AddItemForm() {
  const validate = Yup.object({
    name: Yup.string()
      .min(1, 'Password must be at least 6 charaters')
      .max(15, 'Must be 15 characters or less')
      .required('Name is required'),
    cost: Yup.string()
      .required('Price is required'),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        cost: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 100);
      }}
    >
      {formik => (
        <Box mb={3}>
          <Form id="add-item">
            <TextField label="Name" name="name" type="text" />
            <TextField label="Cost" name="cost" type="number" />
            <button type="submit">click</button>
          </Form>
          
        </Box>
      )}
    </Formik>
  )
}