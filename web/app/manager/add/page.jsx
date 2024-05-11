"use client";

import { useState, useEffect } from "react"
import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Option,
  Box
} from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { useForm, Controller } from "react-hook-form";
import { apiHandler } from "../../../handler"
import Image from 'next/image';


const page = () => {
  const { handleSubmit, control, watch, register, formState: { errors }, reset } = useForm({
    mode: "all"
  });
  const [cover, selectCover] = useState('');

  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => [selectCover(reader.result?.toString())];

    reader.readAsDataURL(file);
  };

 

  useEffect(() => {
    const image = watch('image');
    if (typeof image === 'object' && image.length > 0) {
      const formData = new FormData();
      formData.append('image', image[0]);

      convert2base64(image[0]);

      const { data } =  apiHandler.patch(
        `/api/upload`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    );

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('image')]);


  const onSubmit = async (data) => {
    try {
      await apiHandler.post("/api/menuitems/create", {
        ...data,
        category: Number(data.category),
        price: Number(data.price),

      });
      reset();
    } catch (e) {
      console.error('Error sending data to the backend:', e);
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
              <Controller
                control={control}
                name="category"
                render={({ field, fieldState: { error: descError } }) => (
                  <FormControl isInvalid={errors.category}>
                    <FormLabel htmlFor='category'>Category</FormLabel>
                    <Select placeholder='Select option' {...field}>
                      <option value='1'>Breakfast</option>
                      <option value='2'>Lunch</option>
                      <option value='3'>Dinner</option>
                      <option value='4'>Desert</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.category && errors.category.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
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
                <FormLabel htmlFor='time'>Preparations</FormLabel>
                <Input
                  id='time'
                  placeholder='time'
                  {...register('time', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.time && errors.time.message}
                </FormErrorMessage>
              </FormControl>

              {cover?.length > 0 && (
                <Box mt={5}>
                <Image
                  src={cover}
                  width={200}
                  height={100}
                  alt="cover image"
                />  
              </Box>
              )}

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

              <FormControl>
                <FormLabel htmlFor='folderInput'>3D folder</FormLabel>
                <Input
                  id='folderInput'
                  placeholder='folder'
                  {...register('folderInput')}
                  type="file"
                />
                <FormErrorMessage>
                  {errors.folderInput && errors.folderInput.message}
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
      </Flex >
    </Flex >
  );
};

export default page;
