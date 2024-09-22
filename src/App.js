import ImageViewer from './components/ImageGallery/ImageGallery';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './App.css';

import CollapsibleTable from './components/Table';

import ConferenciasData from './Conferencias.json';
import Otros from './Otros.json'

function App() {
  return (
    <>
      <div className='backgroundDecoration' />
      <div className="App">
        <header className="App-header">
          <img className="Header" src={`${process.env.PUBLIC_URL}/Header.png`} alt="Descripción" />
          <img className="Logo" src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" />
        </header>
        <main>
          <h1>XXX Semana de ingeniería<br /> Conferencias del departamento de ingeniería industrial y manufactura</h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Conferencias
            </AccordionSummary>
            <AccordionDetails>
              <CollapsibleTable
                title={'23 SEPTIEMBRE'}
                headers={{
                  Programa: true,
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                  Liga: false,
                }}
                eventsData={ConferenciasData['23 SEPTIEMBRE']}
              />
              <CollapsibleTable
                title={'24 SEPTIEMBRE'}
                headers={{
                  Programa: true,
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                  Liga: false,
                }}
                eventsData={ConferenciasData['24 SEPTIEMBRE']}
              />
              <CollapsibleTable
                title={'25 SEPTIEMBRE'}
                headers={{
                  Programa: true,
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                  Liga: false,
                }}
                eventsData={ConferenciasData['25 SEPTIEMBRE']}
              />
              <CollapsibleTable
                title={'25 de septiembre Evento CONREDES'}
                headers={{
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                }}
                eventsData={ConferenciasData['25 SEPTIEMBRE CONREDES']}
              >
                <h2>Folletos</h2>
                <ImageViewer></ImageViewer>
              </CollapsibleTable>
              <CollapsibleTable
                title={'26 SEPTIEMBRE'}
                headers={{
                  Programa: true,
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                  Liga: false,
                }}
                eventsData={ConferenciasData['26 SEPTIEMBRE']}
              />
              <CollapsibleTable
                title={'27 SEPTIEMBRE'}
                headers={{
                  Programa: true,
                  Conferencia: true,
                  Fecha: true,
                  Hora: true,
                  Lugar: true,
                  Conferencista: false,
                  Empresa: false,
                  "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": false,
                  Liga: false,
                }}
                eventsData={ConferenciasData['27 SEPTIEMBRE']}
              />
            </AccordionDetails>
          </Accordion>
          <CollapsibleTable
            title={'Talleres y cursos'}
            headers={{
              Programa: true,
              Tema: true,
              Fecha: true,
              Hora: true,
              Conferencista: false,
              Empresa: false,
              "MAESTROS DE CEREMONIAS": false,
              "RESPONSABLES DE CONFERENCIA": false,
              "CORREO ELECTRÓNICO DEL RESPONSABLE": false,
              "CORREO ELECTRÓNICO DEL CONFERENCISTA": false
            }}
            eventsData={Otros['talleres y cursos']}
          />
          <CollapsibleTable
            title={'Concursos'}
            headers={{
              Programa: true,
              Nombre: true,
              Fecha: true,
              Hora: true,
              Instructor: false,
              Correo: false
            }}
            eventsData={Otros.concursos}
          />
          <CollapsibleTable
            title={'Activadades Deportivas'}
            headers={{
              Evento: true,
              Fecha: true,
              Hora: true,
              Responsable: false,
              "Correo electrónico del responsable": false
            }}
            eventsData={Otros['actividades deportivas']}
          />
        </main>
      </div>
    </>
  );
}

export default App;
