import local from '../assets/local.svg'

function Footer(){
  return (
    <footer className="footer p-4 bg-footer text-base-content">
      <aside className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-row space-x-1'>
          <img src={local} alt='localização' title='localização'/>
          <p>Cidade Univ. Prof. José Aloísio de Campos Av. Marechal Rondon, s/n, Jd. Rosa Elze São Cristóvão/SE</p>
        </div>
        <p> &copy;  Copyright. 2023 Todos os direitos reservados.   </p>
      </aside>
    </footer>
  )
}

export default Footer;