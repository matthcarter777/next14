

export async function User() {
  const response = await fetch('https://api.github.com/users/diego3g', {
    next: {
      revalidate: 30,
    }
  });

  
  const user = await response.json();

  return (
    <div>
      <h1>User:</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}