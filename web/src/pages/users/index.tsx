import { GetStaticProps, InferGetStaticPropsType } from "next";

type UsersProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const getStaticProps: GetStaticProps<{
  users: UsersProps[];
}> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    return { notFound: true };
  }

  const users: UsersProps[] = await response.json();

  return {
    props: { users },
    revalidate: 60, // optional: revalidate every 60 seconds
  };
};

const UsersList = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 text-sm text-left'>
        <thead className='bg-gray-100 text-gray-700'>
          <tr>
            <th className='px-4 py-2 border-b'>ID</th>
            <th className='px-4 py-2 border-b'>Name</th>
            <th className='px-4 py-2 border-b'>Username</th>
            <th className='px-4 py-2 border-b'>Email</th>
            <th className='px-4 py-2 border-b'>Address</th>
            <th className='px-4 py-2 border-b'>Phone</th>
            <th className='px-4 py-2 border-b'>Website</th>
            <th className='px-4 py-2 border-b'>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className='hover:bg-gray-50'>
              <td className='px-4 py-2 border-b'>{user.id}</td>
              <td className='px-4 py-2 border-b'>{user.name}</td>
              <td className='px-4 py-2 border-b'>{user.username}</td>
              <td className='px-4 py-2 border-b'>{user.email}</td>
              <td className='px-4 py-2 border-b'>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
                <br />
                <span className='text-xs text-gray-500'>
                  (Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng})
                </span>
              </td>
              <td className='px-4 py-2 border-b'>{user.phone}</td>
              <td className='px-4 py-2 border-b'>
                <a
                  href={`https://${user.website}`}
                  className='text-blue-600 underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {user.website}
                </a>
              </td>
              <td className='px-4 py-2 border-b'>
                <div className='font-semibold'>{user.company.name}</div>
                <div className='text-xs text-gray-600'>
                  {user.company.catchPhrase}
                </div>
                <div className='text-xs text-gray-500 italic'>
                  {user.company.bs}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
