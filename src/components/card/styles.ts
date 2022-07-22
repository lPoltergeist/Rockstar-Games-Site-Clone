import styled from "styled-components";

export const Card = styled.div`
    background: #000;
    min-height: 520px;
    margin-top: 2rem;
    overflow: hidden;
    box-shadow: 0 2px 20px rgba(0,0,0,0.4);
    border-radius: .50rem;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;

    color: #fff;

    .titlediv {
        display: flex;
        padding: 1rem 0 0 2rem;
        align-items: center;
        font-size: 1rem;
    
        time {
        opacity: .65;
        font-weight: 400;
        padding: 0 0 0 .8rem;
        
    }

    h4 {
     color: #fff;
     font-weight: 700;
    }
    }

    img {
        border-radius: .50rem .50rem 0 0 ;
        max-height: 560px;
        width: 100%;
        object-fit: cover;
    }

    h3 {
        line-height: 1.3;
        font-size: 0.9rem;
        padding: 1rem 2rem 3rem 2rem;
        
        text-align: start;
        font-size: 1.25rem;
    }

   
`