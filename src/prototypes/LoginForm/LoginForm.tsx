import {
    StyledLoginFormCheckbox,
    StyledLoginFormContainer,
    StyledPasswordInput,
    StyledUserInput
} from "./styledComponents";

export const LoginForm = () => {
    return(
        <>
            <StyledLoginFormContainer>
                <StyledUserInput
                    type="text"
                    labelText="Username"
                    width="19rem"
                />
                <StyledPasswordInput 
                    type="text"
                    labelText="Password"
                    width="19rem"
                />
                <StyledLoginFormCheckbox
                    id="remember"
                    label="Remember Me"
                    labelColor="#1A2027"
                    boxColor="9e9e9e"
                />
            </StyledLoginFormContainer>
        </>
    );
};