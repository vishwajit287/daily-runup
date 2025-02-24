import { useState } from "react";
import EntryForm from "../components/EntryForm";
import DataTable from "../components/DataTable";

interface Entry {
  id: number;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);

  const handleSave = (data: Entry) => {
    if (editingEntry) {
      setEntries(entries.map((entry) => (entry.id === editingEntry.id ? { ...data, id: editingEntry.id } : entry)));
      setEditingEntry(null);
    } else {
      setEntries([...entries, { ...data, id: Date.now() }]);
    }
  };

  const handleEdit = (entry: Entry) => setEditingEntry(entry);
  const handleDelete = (id: number) => setEntries(entries.filter((entry) => entry.id !== id));

  return (
    <div className="p-6 mt-12">
      <EntryForm onSave={handleSave} editingEntry={editingEntry} />
      <DataTable entries={entries} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
