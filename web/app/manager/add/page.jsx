"use client";

import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { useForm } from "react-hook-form";


const page = () => {
  const { handleSubmit, register, formState: { errors },reset } = useForm({
    mode: "all"
  });

  console.log(errors)

  const onSubmit = async (data) => {
    try {
      await apiHandler.post("/api/", data);

      console.log('data:', data);
      reset();
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  }
  return (
    <Flex>
      <Mdashboard />
      <Flex
        flexDirection="column"
        ml="8%"
        width="60%"
        mt="100px"
        bgColor="white"
        borderRadius="50px"
      >
        <Flex width="100%" bgColor="" height="15%">
          <Heading ml="4%" mt="5%">
            Add Item
          </Heading>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection="row" ml="4%" width="100%" height="100%">
            <Flex flexDirection="column" height="100%" width="45%">
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor='name'>Item name</FormLabel>
                <Input
                  id='name'
                  placeholder='Biriyani'
                  {...register('name', {
                    required: 'Thi¯s is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.price}>
                <FormLabel htmlFor='price'>Price</FormLabel>
                <Input
                  id='price'
                  type="number"
                  placeholder='price'
                  {...register('price', {
                    required: 'This is required',

                  })}
                />

                <FormErrorMessage>
                  {errors.price && errors.price.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.category}>
                <FormLabel htmlFor='category'>Category</FormLabel>
                <Input
                  id='category'
                  placeholder='category'
                  {...register('category', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
                <FormErrorMessage>
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.category}>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Input
                  id='description'
                  placeholder='description'
                  {...register('description', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 20' },
                  })}
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>

            </Flex>
            <Flex
              flexDirection="column"
              ml="4%"
              bgColor=""
              height="100%"
              width="45%"
            >
              <FormControl isInvalid={errors.preperations}>
                <FormLabel htmlFor='perperations'>Preperations</FormLabel>
                <Input
                  id='preperations'
                  placeholder='time'

                  {...register('preperations', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.preperations && errors.preperations.message}
                </FormErrorMessage>
              </FormControl>


              <FormControl>
                <FormLabel htmlFor='image'>Image</FormLabel>
                <Input
                  id='image'
                  placeholder='Image'
                  {...register('image')}
                  type="file"
                />
                <FormErrorMessage>
                  {errors.image && errors.image.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </Flex>
          <Button
            width="70%"
            height="40px"
            ml="15%"
            boxShadow="dark-lg"
            rounded="md"
            borderColor="#00000040"
            borderWidth="2px"
            borderRadius="10px"
            bgColor="white"
          >
            Back
          </Button>
          <Button
            type="submit"
            mt="20px"
            width="70%"
            height="40px"
            ml="15%"
            boxShadow="dark-lg"
            rounded="md"
            borderColor="#00000040"
            borderWidth="2px"
            borderRadius="10px"
            bgColor="white"
          >
            Save
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default page;
