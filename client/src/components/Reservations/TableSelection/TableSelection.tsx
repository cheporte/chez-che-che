import React, { useState } from 'react';

import './TableSelection.sass';

const TableSelection: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

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
