import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`;

export function useLoginMutation () {
    const [login, { loading, error }] = useMutation(LOGIN);

    return { login, loading, error };
};