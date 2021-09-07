import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  border-color: #383636;
  border-style: solid;
  border-width: thin;
  border-radius: 25px;
  padding: 3rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: wrem;
  front-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
