import { Entry } from "../types/Entry";

interface DataTableProps {
  entries: Entry[];
  onEdit: (entry: Entry) => void;
  onDelete: (id: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({ entries, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg mt-10">
      <thead>
        <tr className="bg-black text-white">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <tr key={entry.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.email}</td>
              <td className="p-3 flex justify-center space-x-3">
                <button
                  onClick={() => onEdit(entry)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(entry.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="p-4 text-center text-gray-500">
              No entries found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
