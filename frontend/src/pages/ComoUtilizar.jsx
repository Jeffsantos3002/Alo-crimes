import React, { useState } from 'react';

// Sujeito (Observável)
const SujeitoPopupVideo = () => {
    const [aberto, setAberto] = useState(false);

    const abrirPopup = () => {
        setAberto(true);
    };

    const fecharPopup = () => {
        setAberto(false);
    };

    return {
        aberto,
        abrirPopup,
        fecharPopup,
    };
};


class AbrirPopupCommand {
    constructor(sujeito) {
        this.sujeito = sujeito;
    }

    executar() {
        this.sujeito.abrirPopup();
    }
}


class FecharPopupCommand {
    constructor(sujeito) {
        this.sujeito = sujeito;
    }

    executar() {
        this.sujeito.fecharPopup();
    }
};

// Componente ComoUtilizar
const ComoUtilizar = () => {
    const sujeitoPopupVideo = SujeitoPopupVideo();
    const abrirPopupCommand = new AbrirPopupCommand(sujeitoPopupVideo);
    const fecharPopupCommand = new FecharPopupCommand(sujeitoPopupVideo);

    // Manipuladores de eventos para os comandos
    const handleAbrirPopup = () => {
        abrirPopupCommand.executar();
    };

    const handleFecharPopup = () => {
        fecharPopupCommand.executar();
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1 style={{ fontWeight: 'bold', color: '#004080', fontSize: '24px' }}>Como utilizar a plataforma</h1>
                <p style={{ fontSize: '16px', marginTop: "17px" }}>Bem-vindo a plataforma Alo Crimes! Estamos empolgados em te-lo(a) conosco. Aqui estao algumas dicas sobre como aproveitar<br />
                    ao maximo nossa plataforma e todas as suas funcionalidades. A plataforma Alo Crimes oferece uma variedade de recursos <br />
                    poderosos para ajuda-lo(a) a pesquisar ocorrencias, aplicar filtros, exportar e compartilhar resultados e visualizar graficos. <br />
                    Com nossa plataforma, voce pode se manter informado(a) sobre a seguranca da sua comunidade e contribuir para um ambiente mais seguro para todos.</p>
            </div>
            <div style={{ marginLeft: '20px' }}>
                <p style={{ fontWeight: 'bold', color: '#004080', fontSize: '18px' }}>1. Realizar Pesquisas:</p>
                <p style={{ fontSize: '14px' }}>Pesquise informacoes detalhadas sobre ocorrencias recentes em sua regiao. Obtenha dados sobre tipos de crimes, locais, horarios e outras estatisticas relevantes. Nossa plataforma oferece uma interface intuitiva para navegar pelos dados e visualizar as tendencias de seguranca em sua area.</p>
                <p style={{ fontWeight: 'bold', color: '#004080', fontSize: '18px' }}>2. Aplicar Filtros Avancados:</p>
                <p style={{ fontSize: '14px' }}>Refine suas pesquisas aplicando filtros avancados para encontrar ocorrencias especificas de acordo com seus criterios. Filtrar por tipo de crime, data, localizacao geografica e outras variaveis para obter resultados precisos e relevantes para suas necessidades.</p>
                <p style={{ fontWeight: 'bold', color: '#004080', fontSize: '18px' }}>3. Exportar e Compartilhar Resultados:</p>
                <p style={{ fontSize: '14px' }}>Exporte os resultados de suas pesquisas para analises posteriores ou compartilhe com outras partes interessadas. Nossa plataforma permite exportar dados em varios formatos, facilitando a integracao com outras ferramentas de analise ou a comunicacao de informacoes importantes.</p>
                <p style={{ fontWeight: 'bold', color: '#004080', fontSize: '18px' }}>4. Visualizar Graficos:</p>
                <p style={{ fontSize: '14px' }}>Utilize recursos visuais, como graficos e diagramas, para visualizar os dados de forma clara e compreensivel. Analise as estatisticas e as tendencias de seguranca por meio de representacoes visuais, o que facilita a identificacao de padroes e a tomada de decisoes informadas.</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#004080', fontSize: '18px' }}>
                Clique abaixo e assista o video explicativo
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleAbrirPopup} style={{ position: 'relative', display: 'inline-block', width: '360px', height: '215px' }}>
                    <img src="https://img.youtube.com/vi/YMUVKGaWfVk/hqdefault.jpg" alt="Thumbnail do vídeo" style={{ cursor: 'pointer', position: 'relative', zIndex: 1, width: '100%', height: '100%' }} />
                    {sujeitoPopupVideo.aberto && (
                        <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/YMUVKGaWfVk?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
                        ></iframe>
                    )}
                </button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '5px', fontSize: '14px' }}>
                <p>Parabens! Agora voce esta preparado para utilizar a nosas plataforma de
                </p><p>ocorrencias criminais com confianca e tranquilidade!</p>
            </div>
        </div>
    );
};

export default ComoUtilizar;
