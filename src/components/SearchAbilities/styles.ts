import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height 100%;
  text-align: center;
  justify-content: flex-start;
  padding: 3rem;
  margin: auto;
  display: flex;    
  align-content: flex-start;  
  flex-direction: column;
}
`

export const Form = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 3rem;
    border-radius: 15px;
    padding-left: 1.5rem;
  }

  input: focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
    position: relative;
    float: right;
    top: -2.2rem;
    background: #ffff0000;
    outline: none;
    border: none;
    left: -1rem;

  button {
    border: none;
    background: #ffff0000;
`

export const Results = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  div {
    width: 50%;
  }

  img {
    width: 20rem;
    float: right;
    text-align: right;
  }

  .poke-image {
    position: relative;
    margin: auto;
  }

  .ability-list {
    position: relative;
    text-align: left;
    top: 35%;
  }

  p {
    font-size: 2em;
    font-weight: 600;
  }
`
