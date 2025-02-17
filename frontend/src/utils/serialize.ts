const serialize = (obj: Record<string, any>): string => {
  const query = new URLSearchParams(obj);
  return query.toString();
};

export default serialize;
