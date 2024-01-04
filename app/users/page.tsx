'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await axios.get('/api/users');
    // console.log(res?.data?.data);
    setUsers(res?.data?.data);
  };

  const deleteUser = async (user: object) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this prompt?'
    );

    if (hasConfirmed) {
      try {
        const res = await axios.get(`/api/users/${user._id.toString()}`);
        console.log(res);
        const filteredUsers = users.filter((p) => p._id !== user._id);
        setUsers(filteredUsers);
      } catch (error) {}
    }
    console.log(user._id.toString());
    // const res = await axios.get(`/api/users/${user._id.toString()}`);
    // console.log(res);
    // console.log(res?.data?.data);
    // setUsers(res?.data?.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className=''>
        <div className='w-11/12 mx-auto'>
          <h1 className='text-center font-bold md:text-3xl text-2xl my-5'>
            Users
          </h1>
          <div>
            {users.length > 0 && (
              <div className='flex justify-between md:items-center items-end md:flex-row flex-col mb-3'>
                <div>
                  <h2 className='mb-3 font-semibold text-xl'>Tasks</h2>
                  <p className='mb-3'>
                    Click on the checkbok to mark task as completed
                  </p>
                </div>
                <div>
                  <button className='text-blue-800 border-blue-800 border-2 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'>
                    Clear Users
                  </button>
                </div>
              </div>
            )}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-20'>
              {users.map((user: any) => (
                <div
                  className={`drop-shadow-lg p-3 border border-grey rounded-md mb-5 relative flex flex-col justify-between`}
                  key={user._id}
                >
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.email}</p>
                  <p>{user.track}</p>
                  <p>{user.country}</p>
                  <p>{user.state}</p>
                  <p>{user.education}</p>
                  <div>
                    <button
                      className='text-blue-800 border-blue-800 border-2 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
                      onClick={() => deleteUser(user)}
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* {users.length < 1 && <EmptyState />} */}
          </div>
        </div>
        {/* {showModal && (
          <AddTaskModal
            handleClose={closeModal}
            tasks={tasks}
            setTasks={setTasks}
            editingTask={editingTask}
            taskToEdit={taskToEdit}
            setEditingTask={setEditingTask}
            setShowSuccessModal={setShowSuccessModal}
          />
        )}
        {showSuccessModal && <SuccessModal handleClose={closeSuccessModal} />} */}
      </div>
    </div>
  );
};

export default Users;
