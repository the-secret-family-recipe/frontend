import styled from 'styled-components'

const RecipeStyles = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0;
    align-content: center;  
    font-family: 'Montserrat', sans-serif;

    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:#CB5B04;
        width: 70%;
        padding: 5%;
        border-radius:10px;
    }

    h2{
        font-size: 2rem;
    }

    p{
        color: #220C00;
        font-size: 1.2rem
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
        margin: 5px;
    }
`;
export default RecipeStyles