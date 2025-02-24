import { useState } from "react";
import EntryForm from "../components/EntryForm";
import DataTable from "../components/DataTable";
import { Entry } from "../types/Entry";
import Header from "../components/Header";

const Home: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);

  const handleSave = (entry: Entry) => {
    if (editingEntry) {
      setEntries(entries.map((e) => (e.id === entry.id ? entry : e)));
      setEditingEntry(null);
    } else {
      setEntries([...entries, entry]);
    }
  };

  const handleEdit = (entry: Entry) => {
    setEditingEntry(entry);
  };

  const handleDelete = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <EntryForm onSave={handleSave} editingEntry={editingEntry} />
      <DataTable
        entries={entries}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
