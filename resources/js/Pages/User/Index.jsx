import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link} from '@inertiajs/react';
import { Head} from '@inertiajs/react';
import Pagination from '@/Components/Pagination';


export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Menu Users</h2>}
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-full overflow-x-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-x-auto">
                            <div className='flex justify-between items-center mb-5'>
                                <label className='font-bold'>Total Data User : {users.total}</label>
                                
                                <Link href={route('users.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               + Input User
                                </Link>
                            </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-black uppercase tracking-wider">Id</th>
                                            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-black uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-black uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-black uppercase tracking-wider">Role</th>
                                            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-black uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.data.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
