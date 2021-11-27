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

export default function SignIn() {

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .max(15, 'Must be 15 characters or less')
      .required('Password is required'),
  })

  return (
    <Main title="Sign In" align="center">
      <Heading as="h1" mb={3}>SUBS</Heading>
      <Text mb={2}>Это приложение для учёта подписок на сервисы</Text>
      <Text mb={4}>Войдите или&nbsp;
        <NextLink href="./sign-up">
          <Link textDecoration="underline">зарегистрируйтесь здесь</Link>
        </NextLink>
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
              <button type="submit">click</button>
            </Form>
            
          </Box>
        )}
      </Formik>

    </Main>
  )
}