import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { spacing } from "../styles/settings/spacing";
import { grayscale } from "../styles/settings/colors";
import { size, height } from "../styles/settings/font";

interface PokemonProps {
    page: any;
    content: any; 
    setPage: any; 
    direction: any;
}

const PaginationButton = ({ page, content, setPage, direction }: PokemonProps) => {
    const handleNextPage = () => {
        if(direction === 1){
            setPage((prevPage: any) => prevPage - 1);
        } else {
            setPage((prevPage: any) => prevPage + 1);
        }
    }

    return(
        <>
            <Button onClick={handleNextPage}>{content}</Button>
        </>
    );
}

const Button = styled.button`
    padding: ${rem(spacing.mini)} ${rem(spacing.medium)};
    border: 1px solid white;
    border-radius: ${rem(spacing.small)};
    box-shadow: 5px 5px 10px ${grayscale.lightGray};
    background: ${grayscale.darkGray};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(size.larger)};
    font-weight: bold;
    line-height: ${rem(height.large)};
    cursor: pointer;
    margin: ${rem(spacing.xtiny)};
    :hover {
        color:${grayscale.darkGray};
        background-color: white;
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
`;

export default PaginationButton;