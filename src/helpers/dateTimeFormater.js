const dateTimeFormater = (d) => {
  const date = d.toLocaleDateString('en-GB');
  const time = d.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  return `${date}, ${time}`;
};

export default dateTimeFormater;
