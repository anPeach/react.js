const Component = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <button onClick={() => setCounter(++counter)} />
      <SlowComponent />
    </div>
  );
};

const Button = () => {
  const [counter, setCounter] = useState(1);

  return <button onClick={() => setCounter(++counter)} />;
};
