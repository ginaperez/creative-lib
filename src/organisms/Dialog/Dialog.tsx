import { StyledDialogContainer, StyledDialogContent, StyledDialogFooter } from './styledComponents'

export interface DialogProps {
  bodyContent?: string
  headerText?: string
  footerContent?: string | JSX.Element
}

export const Dialog = ({ bodyContent, headerText, footerContent }: DialogProps) => {
  return (
    <StyledDialogContainer>
      {/* {
        headerText && (
          <StyledDialogHeader>
            {headerText}
          </StyledDialogHeader>
        )
      } */}
      <StyledDialogContent>{bodyContent}</StyledDialogContent>
      {footerContent && <StyledDialogFooter>{footerContent}</StyledDialogFooter>}
    </StyledDialogContainer>
  )
}

export default Dialog
