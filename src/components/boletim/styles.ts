import styled from "styled-components";

export const Section = styled.section`
margin-top: 5rem;
display: flex;
flex-flow: column;
z-index: 8;

font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

span {
    width: fit-content;
    color: #fff;
    border-bottom: solid #ffab00;
    font-size: 1.25rem;
    margin: 0 auto;
    font-weight: 400;
    line-height: unset;
    transition: 0.2s ;
    
}
span:hover {
    background: #ffab00;
    padding: 0 5px;
    border-radius: 0.25rem;
    color: #000;

}

h2 {
    padding: 1rem 0 0 7rem;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
}

.wrapper {
    margin: 0 auto;
    width: 100%; 

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 29rem));
    gap: 2rem;
    justify-content: center;

    margin: 0 0 5rem 0;
}
`

