const compare = (a, b) => {
  const messagesA = a[1];
  const lastMessageDateA = messagesA[messagesA.length - 1].creationDate;
  const messagesB = b[1];
  const lastMessageDateB = messagesB[messagesB.length - 1].creationDate;

  if (lastMessageDateA < lastMessageDateB) {
    return 1;
  }
  if (lastMessageDateA > lastMessageDateB) {
    return -1;
  }
  return 0;
};

export default compare;
