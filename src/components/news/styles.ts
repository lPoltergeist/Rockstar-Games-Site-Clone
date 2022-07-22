import styled from "styled-components";

export const Section = styled.section`
display: flex;
justify-content: flex-start;
position: relative;
background: #000;

@media (max-width: 1125px) {
    flex-flow: column;
    justify-content: space-between;
    grid-template-columns: 70% 1fr;
}

.imgdiv {
    img {
        width: 100%;
    }
}

.infosection {
    max-width: unset;
    padding: 4rem 2rem;

   grid-gap: 1rem;
   align-items: flex-end;
   display: grid;
   height: 100%;
   width: 50%;
   z-index: 1;

   align-items: center;
    justify-content: center;

   @media (max-width:1125px) {
    display: flex;
    width: 100%;
    padding: 1rem 2rem;
   }

   @media (max-width: 600px) {
        max-width: 100%;
        flex-direction: column;
    }
   
  .infodiv {
    color: #fff;
    max-width: 400px;
    grid-gap: 2rem;

    @media (max-width: 1125px) {
        max-width: 100%;
    }
    
    span {
        font-weight: 500;
    }

    h3 {
        font-size: 1.953rem;
    }
  }
}

button {
    align-self: flex-start;
    margin: 2rem 0;
    border: 1px solid #fff;
    border-radius: .25rem;
    background: transparent;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 100%;
    height: 4rem;
    color: #fff;
    padding: 1rem 3rem;
    transition: all .5s;

    min-width: max-content;
    max-width: 3rem;

    &:hover{
        background: #ffab00;
        color: #000;
        border: none;
    }
}

`