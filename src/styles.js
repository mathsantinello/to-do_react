import styled, { createGlobalStyle}  from "styled-components";

export const BodyStyle = createGlobalStyle`
    body{
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        color: rgb(231,186,124);
        background: rgb(19,125,189);
        background: linear-gradient(90deg, rgba(17,63,83,1) 50%, rgba(139,13,14,1) 0%);
  }
`

export const Page_container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    display: flex;
    flex-direction: line;
    justify-content: center;
`
export const Title= styled.div`
    font-size: 42px;
    font-weight: bolder;
    margin-bottom: 50px;
    font-style: italic;
`
export const To_do = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Done =styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Data_input= styled.input`
    width: 400px;
    height: 30px;
    font-size: 14px;
    margin-right: 5px;
    vertical-align: center;
    border: 1px solid black;
`
export const Add_button= styled.button`
    height: 40px;
    width:40px;
`
export const Added_itens= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Entries=styled.div`
    display: flex;
    column-gap: 10px;
`
export const List_logo=styled.div`
    cursor: pointer;
`


