import { useState, useMemo } from "react";

import SearchTable from "./SeachTable";

const SearchTableConcursos = ({ data, title, children }) => {
    const [visibleColumns, setVisibleColumns] = useState({
        PROGRAMA: true,
        NOMBRE: true,
        FECHA: true,
        LUGAR: true,
        ORGANIZADORES: false,
        // Liga: true,
      });
    
      const columns = useMemo(
        () => [
          { Header: 'Conferencia', accessor: 'CONFERENCIA', show: visibleColumns.PROGRAMA },
          { Header: 'Fecha', accessor: 'FECHA', show: visibleColumns.NOMBRE },
          { Header: 'Hora', accessor: 'HORA', show: visibleColumns.FECHA },
          { Header: 'Lugar', accessor: 'LUGAR', show: visibleColumns.LUGAR },
          { Header: 'Conferencista', accessor: 'CONFERENCISTA', show: visibleColumns.ORGANIZADORES },
        //   { 
        //     Header: 'Liga', 
        //     accessor: 'Liga',
        //     show: visibleColumns.Liga,
        //     Cell: ({ value }) => (
        //       value && value.startsWith('http') ? (
        //         <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
        //       ) : (
        //         value
        //       )
        //     ),
        //   },
        ].filter(column => column.show),
        [visibleColumns]
      );

    return (
        <SearchTable
            children={children}
            title={title}
            data={data}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
            columns={columns}
        />
     )
}

export default SearchTableConcursos;