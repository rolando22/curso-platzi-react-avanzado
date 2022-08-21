import { useQuery, gql } from "@apollo/client";

const GET_PHOTO = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export function useGetPhoto (id) {
    const { loading, error, data } = useQuery(
        GET_PHOTO,
        { variables: { id } }
    );

    return { loading, error, data };
};