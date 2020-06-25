import styled from 'styled-components'

const MemberPageStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: 'Great Vives', cursive; 
        font-size: 2rem;
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

    .recipes-container{
        display: flex;
        flex-wrap: wrap;
    }

    .card{
        background-color: #CB5B04;
        font-family: 'Montserrat', sans-serif;
        padding: 3%;
        margin: 10px;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }



`;
export default MemberPageStyles
