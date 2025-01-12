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
    // This effect runs when 'count' changes
    console.log('Rendered', count);
  }, [count]); // Added count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```