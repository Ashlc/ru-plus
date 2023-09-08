import React from 'react';
import Navigator from '../../components/Navigator/Navigator';
import Certificate from './Certificate';
import Settings from './Settings';


function User() {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-center'>
        <div className="w-10/12 flex flex-col gap-16 pb-10">
            <Certificate />
            <Settings />
        </div>
        <Navigator />
    </div>
  )
}

export default User