"use client";

import {
  Flex,
  Button,
  Heading,
  WrapItem,
  Avatar,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { AuthContext } from "../../../context/Auth";
import { useContext,useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiHandler } from "../../../handler";

const page = () => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, register, formState: { errors }, reset, setValue, getValues } = useForm({
    mode: "all"
  });

  const [formData, setFormData] = useState({
    name: user?.username || '',
    designation: user?.designation || '',
    phone_number: user?.phone_number || '',
    email: user?.email || '',
  });

  useEffect(() => {
    // Set initial values for the form fields
    Object.entries(formData).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [formData, setValue]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      await apiHandler.post("/api/user_profile", formData);
      console.log('Data sent to the backend:', formData);
      // You may want to handle successful submission, e.g., display a success message
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  return (
    <Flex>
      <Mdashboard />

      <Flex
        marginTop="10vh"
        padding="5vh"
        width="30vw"
        flexDirection="column"
        backgroundColor="#31A5A5"
        height="75vh"
        alignItems="center"
        borderRightRadius="20px"
      >
        <Heading
          textAlign="center"
          size="50px"
          fontSize="30px"
          fontWeight="bold"
        >
          Profile
        </Heading>

        <Flex
          width="100%"
          height="68vh"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <WrapItem>
            <Avatar
              size="2xl"
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
          </WrapItem>
          <Heading
            marginTop="30px"
            size="50px"
            fontSize="30px"
            fontWeight="bold"
          >
            {user?.username}
          </Heading>

          <Button
            width="50%"
            height="40px"
            mt="20px"
            borderRadius="10px"
            bgColor="white"
          >
            Edit Profile
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        ml="1vw"
        width="45vw"
        mt="10vh"
        bgColor="white"
        borderRadius="5vh"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            padding="2vw"
            justifyContent="space-between"
            ml="2vw"
            flexDirection="column"
            height="60vh"
            width="40vw"
          >
            <FormControl height="10vh" bgColor="#EAEAEA" isInvalid={errors.name}>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                id='name'
                name='name'
                onChange={handleInputChange}
                value={user?.username}
                {...register('name', {
                  required: 'This is required',
                  minLength: { value: 4, message: 'Minimum length should be 4' },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              height="10vh"
              bgColor="#EAEAEA"
              isInvalid={errors.designation}
            >
              <FormLabel htmlFor="designation">Designation</FormLabel>
              <Input
                id="designation"
                value={user?.designation}
                {...register("designation", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.designation && errors.designation.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              height="10vh"
              bgColor="#EAEAEA"
              isInvalid={errors.phone_number}
            >
              <FormLabel htmlFor="phone_number">Phone number</FormLabel>
              <Input
                id="phone_number"
                value={user?.phone_number}
                type="number"
                {...register("phone_number", {
                  required: "This is required",
                  minLength: { value: 10, message: "length should be 10" },
                  maxLength: { value: 10, message: "length should be10" },
                })}
              />
              <FormErrorMessage>
                {errors.phone_number && errors.phone_number.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              height="10vh"
              bgColor="#EAEAEA"
              isInvalid={errors.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                value={user?.email}
                type="email"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Button
            type="submit"
            mt="2vh"
            width="20vw"
            height="4vh"
            ml="20vw"
            boxShadow="dark-lg"
            rounded="md"
            borderColor="#00000040"
            borderWidth="2px"
            borderRadius="10px"
            bgColor="#31A5A5"
          >
            Save changes
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default page;
