import React from 'react'
import md from 'markdown-it'
import checkbox from 'markdown-it-checkbox'
import styled from 'styled-components'

const renderer = md({ html: true, typographer: true }).use(checkbox)

const Content = styled.div`
  h1 {
    font-size: 1.5rem
  }
`

const Markdown = (props) => {
  const markdown = renderer.render(props.markdown)
  return <Content dangerouslySetInnerHTML={{ __html: markdown }} />
}

export default Markdown