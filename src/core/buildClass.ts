const buildClass = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export default buildClass;
