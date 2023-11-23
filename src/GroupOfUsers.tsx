import { useEffect, useState } from 'react'
import EachUser from './EachUser'
import { Button } from '@mui/material'

const endpoint = 'https://random-data-api.com/api/users/random_user?size=12'


export default function GroupOfUsers() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        (async () => {
            try {
                setIsLoading(true)
                const data = await fetch(endpoint)
                    .then(res => res.json())

                setUsers(data)

            } catch (e) {
                console.log("error:", (e as Error).message);
                setError(true);
            } finally {
                setIsLoading(false)
            }
        })
            ()
    }, [])


    // if (!users?.length) {
    //     return <h3>There are no users to be displayed 🤕</h3>
    // }
    // else {

    return (
        <>
            <Button sx={{ backgroundColor: '#d72c40', boxShadow: '#4e4d4d 2px 3px 5px', color: 'white', padding: '10px 20px', textTransform: 'none', marginBottom: '40px' }} onClick={() => window.location.reload()}>Fetch 12 Random</Button>

            <EachUser users={users} error={error} isLoading={isLoading} />
        </>
    )
    // }
}