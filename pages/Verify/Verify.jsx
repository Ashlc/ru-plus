import React from 'react';
import logo from '../../assets/RUPLUS.svg';
import Back from '../../components/Back/Back';

function Verify() {
    return (
        <div
            className='min-h-screen flex flex-col items-center justify-center bg-stdblue'>
            <img src={logo} alt="" className='mb-10' />
            <p className='text-center font-bold text-2xl text-white mb-10'>VERIFIQUE SEU EMAIL</p>
            <div className='w-4/5 text-justify font-thin text-lg text-white [text-align-last:center]'>
                <p>Enviamos um email com instruções para alterar a sua senha. Lembre-se de procurar na caixa de spam ou na lixeira caso não o encontre.</p>
            </div>
            <Back href={'/'} styles={"bottom-20 absolute"} />
        </div>
    )
}

export default Verify