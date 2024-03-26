import { useState, useEffect } from 'react';

import detalhes from '../assets/detalhes.svg'
import logo from '../assets/logo.svg'

function Detalhes({ tabela }) {
  const [info, setInfo] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const pares = Object.entries(tabela);

  const showModal = () => {
    setModalVisible(true);
    setInfo(pares);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  // useEffect(() => {
  //   console.log(info);
  // }, [info]);

  return (
    <div>
      <button onClick={showModal}>
        <img src={detalhes} alt='detalhes' texto='detalhe-crime'/>
      </button>
      {modalVisible && (
        <dialog id="my_modal_2" className="modal bg-black bg-opacity-40" open>
          <div className="modal-box p-0 flex flex-col jusify-center">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white" onClick={hideModal}>✕</button>
            </form>

            <div className='bg-blue flex justify-center h-14'>
              <img src={logo} alt='logo' title='logo'/>
            </div>
            <h3 className="font-bold text-base font-bold text-center mt-4 mb-6">DETALHES</h3>
            <div className='px-10 flex flex-col space-y-2.5 mb-6'>
              {info.map((par, index) => (
                <div key={index} className='flex flex-row justify-between '>
                    <p className='text-sm font-medium'>{par[0]}</p>
                    <p className='text-sm font-thin text-center w-1/3'>{par[1]}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-col items-center mb-2'>
              <button className='btn bg-blue text-white w-52 py-1.5 btn-sm'>BAIXAR</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}

export default Detalhes;
