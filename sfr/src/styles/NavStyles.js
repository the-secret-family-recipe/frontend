import styled from 'styled-components'

const NavStyles = styled.header`
    background-color:#CB5B04;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;

    h1{
        font-family: 'Great Vibes', cursive; 
        font-size: 3rem;
        margin: 0;
        padding: 0 3px;

    }

    button{
        background: none;
        margin: 0 10px 0 0;
    }

    .link{
        text-decoration: none;
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        color: #220C00;
        background-color: #BCF274;
        padding: 2px 4px;
        border-radius: 10px;
    }

`;
export default NavStyles