import React from 'react';
import { ErrorMessage, useField } from 'formik';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import styled from '@emotion/styled'

export const TextField = ({label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Box className="form-input" pos="relative" mb={3} display="flex" flexDir="column" alignItems="center">
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <input
          className={`${meta.touched && meta.error && 'is-invalid'}`}
          {...field}
          type={props.type}
          id={field.name}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </Box>

      <style jsx>{`
        input {
          border: 1px solid white;
        }
        input:focus {
          outline: none;
        }
        input.is-invalid {
          border: 1px solid red;
        }
        .form-input .error {
          position: absolute !important;
        }
      `}</style>

      {/* <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We`ll never share your email.</FormHelperText>
      </FormControl> */}
    </>
  )
}