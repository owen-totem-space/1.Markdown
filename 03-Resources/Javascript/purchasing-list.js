const pages = "#purchases";
const query = (t) => {
  if (!t.completed) return true;
};

dv.taskList(
  dv
    .pages(pages)
    .file.tasks.filter((t) => (t.children = []))
    .where((t) => query(t))
);
