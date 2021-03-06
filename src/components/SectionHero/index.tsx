import React from 'react'

import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'
import { Image, HeaderProps } from 'types/api'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Container from 'components/Container'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type SectionHeroProps = {
  logo: Image
  header: HeaderProps
}

const SectionHero = ({ logo, header }: SectionHeroProps) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
