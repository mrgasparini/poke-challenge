import axios from 'axios'
import { Poke } from 'pages'
import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import * as _ from 'underscore'

import * as S from './styles'

type Props = {
  search: ''
  loading: boolean
  poke: Poke
}

class SearchAbilities extends Component<any, Props> {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      loading: false,
      poke: {
        image: '',
        abilities: []
      }
    }
  }

  handleButtonClick = (event) => {
    event.preventDefault()

    const sendRequest = async () => {
      const { search } = this.state
      if (search.length === 0) return
      this.setState({ loading: true })

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        )
        if (response.status === 200) {
          const responseForm = await axios.get(response.data.forms[0].url)
          const pokeImage = responseForm.data.sprites.front_default

          this.setState({
            poke: {
              image: pokeImage,
              abilities: _.sortBy(
                response.data.abilities.map((a) => {
                  return a.ability
                }),
                'name'
              )
            },
            loading: false
          })
        }
      } catch (err) {
        if (err.response.status === 404) {
          this.setState({
            poke: {
              image: '',
              abilities: []
            },
            loading: false
          })
        }
      }
    }

    sendRequest()
  }

  handleOnInputChange = (event) => {
    const query = event.target.value

    this.setState({
      search: query
    })
  }

  render() {
    const { search } = this.state
    return (
      <S.Wrapper>
        <S.Form>
          <form onSubmit={this.handleButtonClick}>
            <input
              type="text"
              value={search}
              placeholder="Pokemon Name"
              onChange={this.handleOnInputChange}
            />
            <S.SearchButton>
              <button onClick={this.handleButtonClick}>
                <FaSearch aria-hidden={true} />
              </button>
            </S.SearchButton>
          </form>
        </S.Form>
        {this.state.poke?.abilities.length > 0 ? (
          <S.Results>
            <div className="poke-image">
              <img src={this.state.poke.image} />
            </div>
            <div className="ability-list">
              {this.state.poke?.abilities.map((ability, index) => {
                return (
                  <div key={`ability-${index}`}>
                    <p>{ability.name.toUpperCase()}</p>
                  </div>
                )
              })}
            </div>
          </S.Results>
        ) : (
          ''
        )}
      </S.Wrapper>
    )
  }
}

export default SearchAbilities
