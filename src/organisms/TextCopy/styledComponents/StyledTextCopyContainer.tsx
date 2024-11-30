import styled from 'styled-components'

export interface TextCopyContainerProps {
  children?: any
}

export type StyledTextCopyContainerProps = Partial<HTMLDivElement> & TextCopyContainerProps

export const StyledTextCopyContainer = styled.div<StyledTextCopyContainerProps>`
  display: flex;
`
