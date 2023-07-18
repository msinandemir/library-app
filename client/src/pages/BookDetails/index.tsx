import React from "react"
import { useParams,useSearchParams } from "react-router-dom"

export const BookDetails:React.FC = () => {
    const {bookId} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    return(
        <>
        {bookId}
        </>
    )
}