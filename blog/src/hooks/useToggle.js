export const useToggle = (defaultValue = false) => {
  const [state, setState] = useToggle(defaultValue);

  const toggle = () => setState((state) => !state);
  const switchStateTo = (to) => setState(to);

  return [state, toggle, switchStateTo];
};
