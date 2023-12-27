function getUsers(names) {
  const users = [];
  for (let i = 0; i < names.length; i++) {
    users.push({
      name: names[i],
      id: i + 1,
    });
  }
  return users;
}
