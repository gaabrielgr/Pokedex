import styled from 'styled-components';

export const NotFoundStyles = styled.img`
    src: ${props => props.src};
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 90px auto;

`

export const ContainerPai = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    h1{
        margin-top: 45px;
    }
    
`

export const ButtonPoke = styled.button`
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    width: 15%;
    height: 50px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #666666;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        background-color: #e0e0e0;
        border: 1px solid #e0e0e0;
    }
`