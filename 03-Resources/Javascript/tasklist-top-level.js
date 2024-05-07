const pages = arguments[1].pages.toString();
const query = (t) => {
  if (!t.completed) return true;
};

dv.taskList(
  dv
    .pages(pages)
    .file.tasks.filter((t) => (t.children = []))
    .where((t) => query(t))
);
