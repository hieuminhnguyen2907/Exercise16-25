import { Link } from 'react-router-dom';
import users from '../data/users';

const UserList = () => {
    return (
        <div>
            <h2>User List</h2>

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <Link to={`/users/${index}`}>
                            {user.firstName} {user.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;