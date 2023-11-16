

export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const response = await fetch('https://api.github.com/users/diego3g', {
    next: {
      revalidate: 30,
    }
  });

  const user = await response.json();

  return (
    <div>
      <h1>Repo:</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}