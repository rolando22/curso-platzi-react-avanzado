import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`;

export function useRegisterMutation () {
    const [register, { loading, error }] = useMutation(REGISTER);

    return { register, loading, error };
};