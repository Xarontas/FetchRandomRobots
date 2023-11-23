import '@fontsource/roboto/400.css';

export default function EachUser({ users, error, isLoading }: { users: any, error: boolean, isLoading: boolean }) {
    return (
        <>
            <div>
                {isLoading && <strong>is loading...</strong>}
                {error && <mark>Error: Απετυχε η προσβαση στον Server</mark>}

                <div>
                    <div className="cardDiv">
                        {users.map((user: any) => (
                            <div key={user['id']} className="cardStyle2">
                                <div className="flip-card-front">
                                    <div className="photoDiv"><img src={user['avatar']} alt="photo" width={'100%'} height={'100%'} /></div>
                                    <strong> <span>{user['first_name']}</span> <span>{user['last_name']}</span></strong>
                                    <div style={{ textAlign: 'center' }}>{user.employment['title']}</div>
                                </div>
                                <div className="flip-card-back">
                                    <strong> <span>{user['first_name']}</span> <span>{user['last_name']}</span></strong>
                                    <div style={{ textAlign: 'left', fontSize: '12px', paddingTop: '15px' }}>
                                        <ul>
                                            <li>id:  <strong>{user['id']}</strong></li>
                                            <li>Username:  <strong>{user['username']}</strong></li>
                                            <li>email: <strong>{user['email']}</strong></li>
                                            <li>Date of birth:  <strong>{user['date_of_birth']}</strong></li>
                                            <li>City: <strong>{user.address['city']}</strong> </li>
                                            <li>Phone:  <strong>{user['phone_number']}</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}