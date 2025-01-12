```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only on mount and unmount
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    // This effect runs after every render
    console.log('Rendered', count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```