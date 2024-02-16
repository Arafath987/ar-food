import React from 'react'
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

export const Search = () => {
    return (
       <div>
         <InputGroup>
            <InputLeftElement mr="30px" pointerEvents="none">
                <BsSearch size="20px" color="#D9D9D9" />
            </InputLeftElement>
            <Input
                _focus={{
                    outline: "none",
                    border: "none"
                }}
                borderColor="#D9D9D9"
                width="300px"
                height="40px"
                type="search"
                placeholder="search"
            />
        </InputGroup>
       </div>
    )
}

