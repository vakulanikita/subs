import NextLink from 'next/link'
import Main from '../components/layouts/main'
import { 
  Box, 
  Heading,
  Text,
  Link,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { TextField } from '../components/form-input'

export default function SignUp() {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .max(15, 'Must be 15 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  return (
    <Main title="Sign Up" align="center">
      <Heading as="h1" mb={3}>SUBS</Heading>
      <Text mb={2}>Это приложение для учёта подписок на сервисы</Text>
      <Text mb={4}>Регистрация:&nbsp;
        <NextLink href="./sign-in">
          <Link textDecoration="underline">(уже есть аккаунт?)</Link>
        </NextLink>
      </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {formik => (
          <Box mb={3}>
            <Form>
              <TextField label="Email address" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField label="Confirm password" name="confirmPassword" type="password" />
              <button type="submit">click</button>
            </Form>
            
          </Box>
        )}
      </Formik>
    </Main>
  )
}