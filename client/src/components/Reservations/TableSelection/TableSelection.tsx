import React from 'react';

import './TableSelection.sass';

type TableSelectionProps = {
  selectedTable: number;
  setSelectedTable: React.Dispatch<React.SetStateAction<number>>;
};

const TableSelection: React.FC<TableSelectionProps> = ({
  selectedTable, setSelectedTable
}) => {
    const tables = [1, 2, 3, 4, 5]; // Can be dynamic later

    return (
        <section>
            <h2>Select a Table</h2>
            <div className="table-list">
                {tables.map((table) => (
                    <button
                        key={table}
                        className={selectedTable === table ? 'selected' : ''}
                        onClick={() => setSelectedTable(table)}
                    >
                        Table {table}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default TableSelection;
