import styled from "styled-components";

export const Nav = styled.nav`
    max-width: 100%;
    background: #000;
    border-bottom: solid 3px #161616;
    max-height: 5rem;
    z-index: 250;
 
    color: #fff;

    .content {
        align-items: center;
        display: flex;
        justify-content: space-between;
     
        
        .navElement {
            margin: 1.2rem;
            padding: 0 2rem 0 2rem;
            cursor: pointer;
        }
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
    }
   
    

    
`