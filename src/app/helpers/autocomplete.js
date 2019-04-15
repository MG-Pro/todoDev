export default (val, list) => {
  val = val.trim().toLowerCase();
  return list.filter(({name}) => {
    return name.trim().toLowerCase().includes(val)
  });
};
