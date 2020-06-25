import styled from 'styled-components'

const RegisterStyles = styled.div`
    display:flex;
    justify-content: center;

    .register-container{
        background-color: #CB5B04;
        margin: 50px 0;
        width: 500px;
        padding: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 2rem;
        border-radius: 10px;
        color: #220C00;        
    }
    h2{
        font-family: 'Great Vibes', cursive; 
        font-size: 2rem;
        color: #FFF7C6;
    }

    button{
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
export default RegisterStyles