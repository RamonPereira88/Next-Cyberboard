import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
}

export function Input({ name, label }: InputProps) {
   return (
      <FormControl>
      { !!label && <FormLabel htmlFor="email">Email</FormLabel> }
      <ChakraInput
         name={name}
         id={name}
         type="email"
         autoComplete="off"
         focusBorderColor="cyan.500"
         bgColor="gray.900"
         variant="filled"
         _hover={{ bgColor: "gray.900" }}
         size="lg"
      />
      </FormControl>
   );
}